import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { DEFAULT_LEGIFY_APP_CONFIG } from '../constants';
import { AppConfig, AppConfigService } from '../app';

@Injectable()
export class AppConfigLoader {
  constructor(
    protected httpClient: HttpClient,
    protected appConfigService: AppConfigService
  ) {}

  public getAppConfig(
    appConfigPath: string,
    getProfiles = false
  ): Observable<AppConfig> {
    const getAppConfig$ = getProfiles
      ? this.getAppConfigWithProfiles(appConfigPath)
      : this.getAppConfigWithNoProfiles(appConfigPath);
    return getAppConfig$.pipe(
      tap((appConfig) => this.appConfigService.setAppConfig(appConfig))
    );
  }

  protected getAppConfigWithNoProfiles(
    appConfigPath: string
  ): Observable<AppConfig> {
    return this.httpClient.get<AppConfig>(appConfigPath).pipe(
      tap((appConfig) => this.appConfigService.setAppConfig(appConfig)),
      catchError(() => of(DEFAULT_LEGIFY_APP_CONFIG))
    );
  }

  protected getAppConfigWithProfiles(
    appConfigPath: string
  ): Observable<AppConfig> {
    const getAppConfigProfiles$ = this.getAppConfigWithNoProfiles(
      appConfigPath
    ).pipe(
      concatMap((appConfig) => {
        const currMarket = this.appConfigService.currMarket;
        const configForCurrMarket = appConfig.origins.find(
          (config) => config.market === currMarket
        );
        const appConfigProfileReqs$ = (configForCurrMarket.profiles || []).map(
          (profile) =>
            this.httpClient.get(
              `assets/configs/markets/${currMarket}/legify-${profile}.json`
            )
        );
        return configForCurrMarket.profiles
          ? forkJoin(appConfigProfileReqs$)
          : of([appConfig]);
      })
    );

    return getAppConfigProfiles$.pipe(
      map((profileConfigs) => {
        let appConfigWithProfiles = this.appConfigService.appConfig;
        profileConfigs.forEach((profileConfig) => {
          appConfigWithProfiles = {
            ...appConfigWithProfiles,
            ...profileConfig
          };
        });
        return appConfigWithProfiles;
      })
    );
  }
}
