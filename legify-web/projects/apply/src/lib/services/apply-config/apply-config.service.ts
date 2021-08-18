import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApplyConfig, ApplyModuleConfig } from '../../models';
import { ApplyShellSidenavItem } from '@legify/web-ui-elements';
import { ApplyModule } from '../../constants';

@Injectable()
export class ApplyConfigService {
  protected readonly applyConfigSubj: BehaviorSubject<ApplyConfig> = new BehaviorSubject(null);

  get applyConfigUrl(): string {
    return '';
  }

  get navItems$(): Observable<ApplyShellSidenavItem[]> {
    return this.applyConfig$.pipe(map((applyConfig) => applyConfig?.navItems));
  }

  get applyConfig$(): Observable<ApplyConfig> {
    return this.applyConfigSubj.asObservable();
  }

  public updateApplyConfig(applyConfig: ApplyConfig): void {
    this.applyConfigSubj.next(applyConfig);
  }

  public getConfigForModule<C extends ApplyModuleConfig = ApplyModuleConfig>(moduleName: ApplyModule): Observable<C> {
    return this.applyConfig$.pipe(
      map((applyConfig) => {
        const moduleConfig = (applyConfig?.modules || []).find((config) => config.forModule === moduleName);
        return moduleConfig?.config;
      })
    );
  }

  public getApplyConfig(): Observable<ApplyConfig> {
    return of({} as any);
  }
}
