import { LEGIFY_MARKET } from '../../../constants';

export interface OriginToMarketMapping {
  origin: string;
  market: LEGIFY_MARKET;
  profiles: string[];
}
