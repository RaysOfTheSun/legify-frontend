import { Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { LEGIFY_MARKET } from '../../constants/market/legify-market-enum';
import { LegifyAppInitializerFactory } from '../models/legify-app-initailzer-factory';
import { RouterConfigMapper } from '../router-config-mapper/router-config-mapper';

export const legifyAppInitializer = (
  router: Router,
  marketRouterConfigMap: Map<LEGIFY_MARKET, Routes>,
  defaultRoute: string
): LegifyAppInitializerFactory => {
  return () => {
    if (!router || !marketRouterConfigMap) {
      throw 'Failed to initailize the application.';
    }

    const routerConfigForMarket = RouterConfigMapper.getRouterConfigFromMap(
      marketRouterConfigMap,
      defaultRoute
    );

    if (!routerConfigForMarket) {
      throw 'Failed to initailize the application.';
    }

    return new Observable<boolean>((subscriber) => {
      router.resetConfig(routerConfigForMarket);
      subscriber.next(true);
      subscriber.complete();
    }).toPromise();
  };
};
