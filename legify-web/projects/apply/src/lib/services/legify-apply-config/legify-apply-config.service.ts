import { Injectable } from '@angular/core';
import { ApplyShellSidenavItem } from '@legify/web-core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DEFAULT_LEGIFY_APPLY_CONFIG } from '../../constants/configs/default-apply-config';
import { ApplyConfig } from '../../models/apply-config';

@Injectable()
export class LegifyApplyConfigService {
  protected readonly applyConfigSubj: BehaviorSubject<ApplyConfig> =
    new BehaviorSubject(DEFAULT_LEGIFY_APPLY_CONFIG);

  constructor() {}

  get applyConfig$(): Observable<ApplyConfig> {
    return this.applyConfigSubj.asObservable();
  }

  public getApplyConfig(): Observable<ApplyConfig> {
    return of({} as any);
  }

  public getNavItems(): Observable<ApplyShellSidenavItem[]> {
    return of([]);
  }
}
