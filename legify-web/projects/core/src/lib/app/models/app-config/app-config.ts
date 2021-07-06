import { LEGIFY_FEATURE } from '../../../constants';
import { AppLogoConfig } from './app-logo-config';
import { AppOriginConfig } from './app-origin-config';
import { FeatureConfig } from './features/feature-config';
import { UiElementsConfig } from './ui-elements/ui-elements-config';

export interface AppConfig {
  origins: AppOriginConfig[];
  features: Record<LEGIFY_FEATURE, FeatureConfig>;
  uiElements: UiElementsConfig;
  logoConfigs: AppLogoConfig[];
}
