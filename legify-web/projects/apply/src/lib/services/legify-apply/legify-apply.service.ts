import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { concatMap, filter, map } from 'rxjs/operators';
import {
  Person,
  ApplyShellSidenavItem,
  SystemEventService,
  ApplicationSelected
} from '@legify/web-core';
import { LegifyApplyConfigService } from '../legify-apply-config/legify-apply-config.service';
import { LegifyApplication } from '../../models';
import { LegifyApplyHttpDataService } from '../legify-apply-http-data/legify-apply-http-data.service';

@Injectable()
export class LegifyApplyService {
  protected readonly currentApplicationSubj: BehaviorSubject<LegifyApplication> =
    new BehaviorSubject(null);

  constructor(
    protected systemEventService: SystemEventService,
    protected legifyApplyConfigService: LegifyApplyConfigService,
    protected legifyApplyHttpDataService: LegifyApplyHttpDataService
  ) {}

  get currApplication$(): Observable<LegifyApplication> {
    return this.currentApplicationSubj.asObservable();
  }

  public getApplication(applicationId: string): Observable<LegifyApplication> {
    return this.legifyApplyHttpDataService.getLegifyApplication(applicationId);
  }

  public listenForApplicationSelection(): void {
    this.systemEventService.events$
      .pipe(
        filter((systemEvent) => systemEvent instanceof ApplicationSelected),
        concatMap((applicationSelectedEvent: ApplicationSelected) =>
          this.getApplication(applicationSelectedEvent.selectedApplicationId)
        )
      )
      .subscribe((legifyApplication) =>
        this.currentApplicationSubj.next(legifyApplication)
      );
  }

  public getCurrCustomer(): Observable<Person> {
    return this.currApplication$.pipe(map((application) => application?.owner));
  }

  public getNavItems(): Observable<ApplyShellSidenavItem[]> {
    return this.legifyApplyConfigService.getNavItems() || of([]);
  }
}
