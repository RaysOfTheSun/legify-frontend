import { Injectable } from '@angular/core';
import { LegifyApplication, ApplicationProgress } from '../../../../models';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { ApplyHttpDataService } from '../apply-http-data/apply-http-data.service';

@Injectable()
export class ApplyDataService {
  constructor(protected applyHttpDataService: ApplyHttpDataService) {}

  protected readonly currApplicationSubj: BehaviorSubject<LegifyApplication> = new BehaviorSubject(null);

  public getApplicationById<A extends LegifyApplication = LegifyApplication>(applicationId: string): Observable<A> {
    return this.applyHttpDataService.getLegifyApplication(applicationId);
  }

  public setCurrApplication(newApplication: LegifyApplication): void {
    this.currApplicationSubj.next(newApplication);
  }

  public getCurrApplication<A extends LegifyApplication = LegifyApplication>(): Observable<A> {
    return this.currApplicationSubj.asObservable().pipe(take(1)) as Observable<A>;
  }

  public updateCurrApplicationProgressInfo(updatedProgressInfo: ApplicationProgress[]): Observable<LegifyApplication> {
    return this.getCurrApplication().pipe(
      map(
        (currApplication) => {
          currApplication.progressInfo = updatedProgressInfo;
          return currApplication;
        },
        tap((updatedApplication: LegifyApplication) => this.currApplicationSubj.next(updatedApplication))
      )
    );
  }
}
