import { SESSION_VARIABLE } from '../../constants/app-variables/session-variable-enum';
import { LEGIFY_MARKET } from '../../constants/market/legify-market-enum';

export class MarketSessionMapper {
  public static getCurrMarket(): LEGIFY_MARKET {
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
}
