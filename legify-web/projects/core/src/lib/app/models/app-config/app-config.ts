import { AppLogoConfig } from './app-logo-config';
import { AppOriginConfig } from './app-origin-config';
import { UiElementsConfig } from './ui-elements/ui-elements-config';

export interface AppConfig {
  origins: AppOriginConfig[];
  uiElements: UiElementsConfig;
  logoConfigs: AppLogoConfig[];
}
