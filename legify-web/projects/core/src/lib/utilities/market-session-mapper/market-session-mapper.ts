import { SESSION_VARIABLE } from '../../constants/app-variables/session-variable-enum';
import { DEFAULT_LEGIFY_APP_CONFIG } from '../../constants/config/default-app-config';
import { LEGIFY_MARKET } from '../../constants/market/legify-market-enum';
import { LegifyAppConfig, OriginToMarketMapping } from '../models/app-config';

export class MarketSessionMapper {
  public static getCurrMarketFromSessionStorage(): LEGIFY_MARKET {
    const currSessionMarket = sessionStorage.getItem(SESSION_VARIABLE.MARKET);
    const cleanedCurrSessionMarket = currSessionMarket
      ? (currSessionMarket.toLocaleLowerCase().trim() as LEGIFY_MARKET)
      : LEGIFY_MARKET.COR;

    const isCurrSessionMarketKnown = Object.keys(LEGIFY_MARKET).includes(
      cleanedCurrSessionMarket
    );

    return isCurrSessionMarketKnown
      ? cleanedCurrSessionMarket
      : LEGIFY_MARKET.COR;
  }

  public static getCurrMarketFromAppUrlByConfig(
    appConfig: LegifyAppConfig
  ): LEGIFY_MARKET {
    const configForCurrOrigin = (
      appConfig || DEFAULT_LEGIFY_APP_CONFIG
    ).origins.find(
      (originConfig) => originConfig.origin === window.location.origin
    );

    return configForCurrOrigin.market;
  }
}
