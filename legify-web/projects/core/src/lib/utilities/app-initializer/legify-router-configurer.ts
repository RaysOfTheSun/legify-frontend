import { Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { LEGIFY_MARKET } from '../../constants/market/legify-market-enum';
import { RouterConfigMapper } from '../router-config-mapper/router-config-mapper';

export const legifyRouterConfigurer = (
  router: Router,
  marketRouterConfigMap: Map<LEGIFY_MARKET, Routes>,
  defaultRoute: string,
  currMarket?: LEGIFY_MARKET
): Observable<boolean> => {
  if (!router || !marketRouterConfigMap) {
    throw 'Failed to initailize the application.';
  }

  const routerConfigForMarket = RouterConfigMapper.getRouterConfigFromMap(
    marketRouterConfigMap,
    defaultRoute,
    currMarket
  );

  if (!routerConfigForMarket) {
    throw 'Failed to initailize the application.';
  }

  return new Observable<boolean>((subscriber) => {
    router.resetConfig(routerConfigForMarket);
    subscriber.next(true);
    subscriber.complete();
  });
};
