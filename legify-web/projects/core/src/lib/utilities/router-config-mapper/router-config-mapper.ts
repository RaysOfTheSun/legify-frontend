import { Routes } from '@angular/router';
import { LEGIFY_MARKET } from '../../constants/market/legify-market-enum';

export class RouterConfigMapper {
  public static getRouterConfigFromMap(
    defaultRoute: string,
    currSessionMarket: LEGIFY_MARKET,
    marketRouterConfigMap: Map<LEGIFY_MARKET, Routes>
  ): Routes {
    const routerConfigForMarket = marketRouterConfigMap.get(
      currSessionMarket || LEGIFY_MARKET.COR
    );

    return [
      ...routerConfigForMarket,
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: defaultRoute
      }
    ];
  }
}
