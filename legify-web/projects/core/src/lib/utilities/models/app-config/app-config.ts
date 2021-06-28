import { LogoConfig } from './legify-logo-config';
import { OriginToMarketMapping } from './origin-to-market-mapping';
import { UiElementsConfigs } from './ui-elements/legify-ui-elements-config';

export interface LegifyAppConfig {
  origins: OriginToMarketMapping[];
  uiElements: UiElementsConfigs;
  logoConfigs: LogoConfig[];
}
