import { Provider } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { AppConfigLoader } from './app-config-loader';
import { AppConfigurer } from './app-configurer';
import { AppLogoConfigurer } from './app-logo-configurer';
import { RouterConfigurer } from './router-configuer';

export const APP_CONFIGURER_DEPENDENCIES: Provider[] = [
  AppConfigurer,
  AppConfigLoader,
  MatIconRegistry,
  RouterConfigurer,
  AppLogoConfigurer
];
