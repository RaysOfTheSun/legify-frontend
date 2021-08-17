import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { SESSION_VARIABLE } from '@legify/web-core';
import { LegifyApplication, Person } from '../../models';
import { ApplicationProgress } from '../../models/application/application-progress/application-progress';
import { ApplyConfigService } from '../apply-config/apply-config.service';
import { ApplyHttpDataService } from '../apply-http-data/apply-http-data.service';

@Injectable()
export class ApplyService<A extends LegifyApplication = LegifyApplication> {
  protected readonly currentApplicationSubj: BehaviorSubject<A> = new BehaviorSubject(null);
  public isLoaded = new BehaviorSubject<boolean>(false);

  constructor(protected applyConfigService: ApplyConfigService, protected applyHttpDataService: ApplyHttpDataService) {
    this.applyHttpDataService.getApplyConfig().pipe(take(1)).subscribe();
  }

  get currApplication$(): Observable<A> {
    return this.currentApplicationSubj.asObservable();
  }

  public getApplication(applicationId: string): Observable<A> {
    return this.applyHttpDataService.getLegifyApplication(applicationId);
  }

  public getCurrSelectedApplication(): void {
    this.getApplication(sessionStorage.getItem(SESSION_VARIABLE.APPLICATION_ID)).subscribe((application) =>
      this.currentApplicationSubj.next(application)
    );
  }

  public getCurrCustomer(): Observable<Person> {
    return this.currApplication$.pipe(map((application) => application?.owner));
  }

  public updateCurrApplicationProgressInfo(updatedProgressInfo: ApplicationProgress[]): void {
    this.currApplication$.pipe(take(1)).subscribe((currApplication) => {
      currApplication.progressInfo = updatedProgressInfo;
      this.currentApplicationSubj.next(currApplication);
    });
  }
}
