import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { first, map, take } from 'rxjs/operators';
import { SESSION_VARIABLE } from '@legify/web-core';
import { LegifyApplication, Person } from '../../models';
import { ApplicationProgress } from '../../models/application/application-progress/application-progress';
import { ApplyHttpDataService } from '../../modules/apply-data-providers/services/apply-http-data/apply-http-data.service';
import { Router } from '@angular/router';
import { ApplyDataService } from '../../modules/apply-data-providers/services';

@Injectable()
export class ApplyService {
  constructor(
    protected router: Router,
    protected applyDataService: ApplyDataService,
    protected applyHttpDataService: ApplyHttpDataService
  ) {}

  getCurrApplication<A extends LegifyApplication = LegifyApplication>(): Observable<A> {
    return this.applyDataService.getCurrApplication();
  }

  public isNftfEnabledForCurrModule(): boolean {
    return ['documents'].includes(this.router.url.replace('/apply/', '').trim());
  }

  public getApplication<A extends LegifyApplication>(applicationId: string): Observable<A> {
    return this.applyHttpDataService.getLegifyApplication(applicationId);
  }

  public getCurrCustomer(): Observable<Person> {
    return this.getCurrApplication().pipe(map((application) => application?.owner));
  }

  public updateCurrApplicationProgressInfo(updatedProgressInfo: ApplicationProgress[]): Observable<LegifyApplication> {
    return this.applyDataService.updateCurrApplicationProgressInfo(updatedProgressInfo);
  }
}
