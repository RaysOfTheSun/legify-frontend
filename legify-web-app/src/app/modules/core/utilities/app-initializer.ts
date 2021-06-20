import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { concatMap, map } from 'rxjs/operators';
import {
  legifyRouterConfigurer,
  OriginToMarketMapping
} from '@legify/web-core';
import { MARKET_ROUTER_CONFIG_MAP } from 'src/app/router-configs/market-router-config-map';
import { LEGIFY_MARKET, LegifyAppConfig } from '@legify/web-core';
import { Observable } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

// TODO: implement in legify/web-core
export const legifyWebAppInitializer =
  (
    router: Router,
    httpClient: HttpClient,
    domSanitizer: DomSanitizer,
    matIconRegistry: MatIconRegistry
  ) =>
  () => {
    const appConfigReq$ = httpClient.get<LegifyAppConfig>(
      'assets/configs/app-config.json'
    );

    const registerGlobalCompanyLogo$ = appConfigReq$.pipe(
      concatMap((appConfig) => {
        return new Observable<OriginToMarketMapping>((subscriber) => {
          const currMarketConfig = appConfig.origins.find(
            (config) => config.origin === window.location.origin
          );

          const logoConfigForCurrMarket = appConfig.logoConfigs.find(
            (logoConfig) => logoConfig.market === currMarketConfig.market
          );

          const sanitizedLogoUrl = domSanitizer.bypassSecurityTrustResourceUrl(
            logoConfigForCurrMarket.logoUrl
          );

          matIconRegistry.addSvgIcon('legify-logo', sanitizedLogoUrl);
          subscriber.next(currMarketConfig);
          subscriber.complete();
        });
      })
    );

    const initApp$ = registerGlobalCompanyLogo$.pipe(
      concatMap((marketConfig) => {
        return legifyRouterConfigurer(
          router,
          MARKET_ROUTER_CONFIG_MAP,
          'auth/login',
          marketConfig.market
        );
      })
    );

    return initApp$.toPromise();
  };
