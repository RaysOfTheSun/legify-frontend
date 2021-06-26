import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DEFAULT_LEGIFY_APPLY_CONFIG } from '../../constants/configs/default-apply-config';
import {
  ApplyTaskCardConfigs,
  TaskCardRowConfigs,
  ApplyConfig
} from '../../models';
import { ApplyShellSidenavItem } from '@legify/web-ui-elements';
import { APPLY_MODULE } from '../../constants';

@Injectable()
export class LegifyApplyConfigService {
  protected readonly applyConfigSubj: BehaviorSubject<ApplyConfig> =
    new BehaviorSubject(DEFAULT_LEGIFY_APPLY_CONFIG);

  constructor() {}

  get applyConfigUrl(): string {
    return '';
  }

  get navItems$(): Observable<ApplyShellSidenavItem[]> {
    return this.applyConfig$.pipe(map((applyConfig) => applyConfig?.navItems));
  }

  get applyConfig$(): Observable<ApplyConfig> {
    return this.applyConfigSubj.asObservable();
  }

  get taskCardConfigs$(): Observable<ApplyTaskCardConfigs> {
    return this.applyConfig$.pipe(
      map((applyConfig) => applyConfig?.taskCardConfigs)
    );
  }

  public updateApplyConfig(applyConfig: ApplyConfig): void {
    this.applyConfigSubj.next(applyConfig);
  }

  public getTaskCardRowConfigForModule(
    module: APPLY_MODULE
  ): Observable<TaskCardRowConfigs> {
    return this.taskCardConfigs$.pipe(
      map((config) =>
        config.rowConfigs.find((rowConfig) => rowConfig?.forModule === module)
      )
    );
  }

  public getApplyConfig(): Observable<ApplyConfig> {
    return of({} as any);
  }
}
