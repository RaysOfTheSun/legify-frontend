import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, concatMap, map } from 'rxjs/operators';
import {
  LEGIFY_MARKET,
  LegifyAppConfig,
  IconRegistryConfigurer,
  RouterConfigurer,
  MarketSessionMapper,
  AUTH_MODULE,
  DEFAULT_LEGIFY_APP_CONFIG,
  AppConfigService,
  AppConfigProfile
} from '@legify/web-core';
import { MARKET_ROUTER_CONFIG_MAP } from 'src/app/router-configs/market-router-config-map';
import { forkJoin, Observable, of } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';

export const legifyWebAppInitializer =
  (
    router: Router,
    httpClient: HttpClient,
    matIconRegistry: MatIconRegistry,
    iconRegistryConfigurer: IconRegistryConfigurer,
    appConfigService: AppConfigService
  ) =>
  () => {
    // TODO: implement app-initailizer and updated utilities for retrieving
    // profile configs in legify/web-core
    const getAppConfig$ = httpClient
      .get<LegifyAppConfig>('assets/configs/app-config.json')
      .pipe(
        concatMap((appConfig) => {
          appConfigService.updateAppConfig(appConfig);
          const currMarket =
            MarketSessionMapper.getCurrMarketFromAppUrlByConfig(appConfig);
          const profilesForMarket = appConfig.origins.find(
            (originMapping) => originMapping.market === currMarket
          );
          const getActiveProfileConfigs$ = profilesForMarket.profiles.map(
            (profile) => {
              const profilePath = `assets/configs/markets/${currMarket}/legify-${profile}.json`;
              return httpClient.get<AppConfigProfile>(profilePath);
            }
          );

          return forkJoin(getActiveProfileConfigs$);
        }),
        map((profiles) => {
          let finalMarketConfig = { ...appConfigService.appConfig };
          profiles.forEach(
            (profile) =>
              (finalMarketConfig = { ...finalMarketConfig, ...profile })
          );

          return finalMarketConfig;
        })
      );

    const getCurrMarket$ = getAppConfig$.pipe(
      catchError(() => of(DEFAULT_LEGIFY_APP_CONFIG)),
      concatMap((appConfig) => {
        return new Observable<LEGIFY_MARKET>((subscriber) => {
          appConfigService.updateAppConfig(appConfig);
          console.log(appConfigService.appConfig);
          const currMarket =
            MarketSessionMapper.getCurrMarketFromAppUrlByConfig(appConfig);
          const iconConfigs = appConfig.logoConfigs.find(
            (logoConfig) => logoConfig.market === currMarket
          );

          iconRegistryConfigurer.register(
            matIconRegistry,
            iconConfigs.logoUrl,
            'legify-logo'
          );

          subscriber.next(currMarket);
          subscriber.complete();
        });
      })
    );

    const configureRouter$ = getCurrMarket$.pipe(
      concatMap((currMarket) =>
        RouterConfigurer.configure(
          router,
          currMarket,
          AUTH_MODULE.LOGIN,
          MARKET_ROUTER_CONFIG_MAP
        )
      )
    );

    return configureRouter$.toPromise();
  };
