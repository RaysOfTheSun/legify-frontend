import { AppConfig } from '../../app';
import { LEGIFY_MARKET } from '../market/legify-market-enum';

export const DEFAULT_LEGIFY_APP_CONFIG: AppConfig = {
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
  },
  features: {
    nftf: {
      enabled: false
    }
  },
  i18nConfig: {
    configPath: '',
    useI18n: true
  }
};
