import { LEGIFY_MARKET } from '../../constants';

export interface OriginToMarketMapping {
  origin: string;
  market: LEGIFY_MARKET;
}

export interface LogoConfig {
  market: LEGIFY_MARKET;
  logoUrl: string;
  logoClass?: string;
}

export interface LegifyAppConfig {
  origins: OriginToMarketMapping[];
  logoConfigs: LogoConfig[];
}
