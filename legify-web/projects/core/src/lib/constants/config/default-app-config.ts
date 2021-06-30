import { LegifyAppConfig } from '../../utilities';
import { LEGIFY_MARKET } from '../market/legify-market-enum';

export const DEFAULT_LEGIFY_APP_CONFIG: LegifyAppConfig = {
  origins: [
    {
      origin: 'http://localhost:4200',
      market: LEGIFY_MARKET.COR,
      profiles: ['cor']
    }
  ],
  logoConfigs: [
    {
      market: LEGIFY_MARKET.COR,
      logoUrl: 'assets/logos/legify.svg'
    }
  ],
  uiElements: {
    taskCardConfigs: {
      highlightColorMap: {}
    }
  }
};
