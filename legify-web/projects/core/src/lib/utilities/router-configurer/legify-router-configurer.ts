import { Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { LEGIFY_MARKET } from '../../constants/market/legify-market-enum';
import { RouterConfigMapper } from '../router-config-mapper/router-config-mapper';

export class RouterConfigurer {
  public static configure(
    router: Router,
    currMarket: LEGIFY_MARKET,
    defaultRoute: string,
    marketRouterConfigMap: Map<LEGIFY_MARKET, Routes>
  ): Observable<boolean> {
    return new Observable((subscriber) => {
      if (!router || !marketRouterConfigMap) {
        throw new Error('Failed to initailize the application.');
      }

      const routerConfig = RouterConfigMapper.getRouterConfigFromMap(
        defaultRoute,
        currMarket,
        marketRouterConfigMap
      );

      router.resetConfig([
        ...routerConfig,
        {
          path: '**',
          pathMatch: 'full',
          redirectTo: defaultRoute
        }
      ]);

      subscriber.next(true);
      subscriber.complete();
    });
  }
}
