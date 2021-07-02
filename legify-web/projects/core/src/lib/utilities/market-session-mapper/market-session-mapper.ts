import { AppConfig } from '../../app';
import { LEGIFY_MARKET, SESSION_VARIABLE } from '../../constants';

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
    appConfig: AppConfig
  ): LEGIFY_MARKET {
    const configForCurrOrigin = appConfig.origins.find(
      (originConfig) => originConfig.origin === window.location.origin
    );

    return configForCurrOrigin.market;
  }
}
