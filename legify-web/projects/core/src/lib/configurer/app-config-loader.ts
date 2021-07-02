import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { DEFAULT_LEGIFY_APP_CONFIG } from '../constants';
import { AppConfigService } from '../system';
import { LegifyAppConfig, MarketSessionMapper } from '../utilities';

@Injectable()
export class AppConfigLoader {
  constructor(
    protected httpClient: HttpClient,
    protected appConfigService: AppConfigService
  ) {}

  public getAppConfig(
    appConfigPath: string,
    getProfiles = false
  ): Observable<LegifyAppConfig> {
    const getAppConfig$ = getProfiles
      ? this.getAppConfigWithProfiles(appConfigPath)
      : this.getAppConfigWithNoProfiles(appConfigPath);
    return getAppConfig$.pipe(
      tap((appConfig) => {
        this.appConfigService.setCurrMarket(
          MarketSessionMapper.getCurrMarketFromAppUrlByConfig(appConfig)
        );
        this.appConfigService.setAppConfig(appConfig);
      })
    );
  }

  protected getAppConfigWithNoProfiles(
    appConfigPath: string
  ): Observable<LegifyAppConfig> {
    return this.httpClient.get<LegifyAppConfig>(appConfigPath).pipe(
      tap((appConfig) => this.appConfigService.setAppConfig(appConfig)),
      catchError(() => of(DEFAULT_LEGIFY_APP_CONFIG))
    );
  }

  protected getAppConfigWithProfiles(
    appConfigPath: string
  ): Observable<LegifyAppConfig> {
    const getAppConfigProfiles$ = this.getAppConfigWithNoProfiles(
      appConfigPath
    ).pipe(
      concatMap((appConfig) => {
        const currMarket =
          MarketSessionMapper.getCurrMarketFromAppUrlByConfig(appConfig);
        const configForCurrMarket = appConfig.origins.find(
          (config) => config.market === currMarket
        );
        const appConfigProfileReqs$ = configForCurrMarket.profiles.map(
          (profile) =>
            this.httpClient.get(
              `assets/configs/markets/${currMarket}/legify-${profile}.json`
            )
        );
        return forkJoin(appConfigProfileReqs$);
      })
    );

    return getAppConfigProfiles$.pipe(
      map((profileConfigs) => {
        let appConfigWithProfiles = this.appConfigService.appConfig;
        profileConfigs.forEach(
          (profileConfig) =>
            (appConfigWithProfiles = {
              ...appConfigWithProfiles,
              ...profileConfig
            })
        );
        return appConfigWithProfiles;
      })
    );
  }
}
