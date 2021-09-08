import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApplyConfig, ApplyModuleConfig } from '../../../../models';
import { ApplyShellSidenavItem } from '@legify/web-ui-elements';
import { ApplyAppModule } from '../../../../constants';
import { APPLY_CONFIG_URL } from '../../../../constants/injection-tokens';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApplyConfigService {
  constructor(protected httpClient: HttpClient, @Optional() @Inject(APPLY_CONFIG_URL) public applyConfigUrl?: string) {}

  protected readonly applyConfigSubj: BehaviorSubject<ApplyConfig> = new BehaviorSubject(null);

  get navItems$(): Observable<ApplyShellSidenavItem[]> {
    return this.applyConfig$.pipe(map((applyConfig) => applyConfig?.navItems));
  }

  get applyConfig$(): Observable<ApplyConfig> {
    return this.applyConfigSubj.asObservable();
  }

  public updateApplyConfig(applyConfig: ApplyConfig): void {
    this.applyConfigSubj.next(applyConfig);
  }

  public loadApplyConfig(): Observable<boolean> {
    return this.httpClient.get<ApplyConfig>(this.applyConfigUrl).pipe(
      tap((applyConfig) => this.applyConfigSubj.next(applyConfig)),
      map((config) => !!config)
    );
  }

  public getConfigForModule<C extends ApplyModuleConfig = ApplyModuleConfig>(
    moduleName: ApplyAppModule
  ): Observable<C> {
    return this.applyConfig$.pipe(
      map((applyConfig) => {
        const moduleConfig = (applyConfig?.modules || []).find((config) => config.forModule === moduleName);
        return moduleConfig?.config;
      })
    );
  }
}
