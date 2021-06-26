import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { SESSION_VARIABLE } from '@legify/web-core';
import { LegifyApplyConfigService } from '../legify-apply-config/legify-apply-config.service';
import { LegifyApplication, Person } from '../../models';
import { LegifyApplyHttpDataService } from '../legify-apply-http-data/legify-apply-http-data.service';

@Injectable()
export class LegifyApplyService {
  protected readonly currentApplicationSubj: BehaviorSubject<LegifyApplication> =
    new BehaviorSubject(null);

  constructor(
    protected applyConfigService: LegifyApplyConfigService,
    protected applyHttpDataService: LegifyApplyHttpDataService
  ) {
    this.applyHttpDataService.getApplyConfig().pipe(take(1)).subscribe();
  }

  get currApplication$(): Observable<LegifyApplication> {
    return this.currentApplicationSubj.asObservable();
  }

  public getApplication(applicationId: string): Observable<LegifyApplication> {
    return this.applyHttpDataService.getLegifyApplication(applicationId);
  }

  public getCurrSelectedApplication(): void {
    this.getApplication(
      sessionStorage.getItem(SESSION_VARIABLE.APPLICATION_ID)
    ).subscribe((application) => this.currentApplicationSubj.next(application));
  }

  public getCurrCustomer(): Observable<Person> {
    return this.currApplication$.pipe(map((application) => application?.owner));
  }
}
