import { Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { MARKET_ROUTER_CONFIG_MAP } from '../router-configs/market-router-config-map';

// TODO: develop this in legify/web-core
// something that would accept the current router and market-router config map
export const legifyWebAppInitializer = (
  router: Router
): (() => Promise<boolean>) => {
  return () =>
    new Observable<boolean>((subscriber) => {
      // TODO: implement a mechanism to retrieve the current market that
      // is able to handle an unknown market
      const currMarket = 'cor';
      const routerConfigsForMarket = MARKET_ROUTER_CONFIG_MAP.get(currMarket);
      const finalRouterConfig: Routes = [
        ...routerConfigsForMarket,
        {
          path: '**',
          pathMatch: 'full',
          redirectTo: 'apply'
        }
      ];

      router.resetConfig(finalRouterConfig);
      subscriber.next(true);
      subscriber.complete();
    }).toPromise();
};
