import { Routes } from '@angular/router';
import { LEGIFY_MARKET } from '../../constants/market/legify-market-enum';
import { MarketSessionMapper } from '../market-session-mapper/market-session-mapper';

export class RouterConfigMapper {
  public static getRouterConfigFromMap(
    marketRouterConfigMap: Map<LEGIFY_MARKET, Routes>,
    defaultRoute: string,
    marketToRetrieve?: LEGIFY_MARKET
  ): Routes {
    const currSessionMarket =
      marketToRetrieve || MarketSessionMapper.getCurrMarket();
    const routerConfigForMarket = marketRouterConfigMap.get(currSessionMarket);

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
