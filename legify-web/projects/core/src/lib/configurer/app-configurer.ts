import { Injectable } from '@angular/core';
import { APP_CONFIGURER_SETTINGS } from '../constants/config/app-configurer-settings';
import { RouterConfigurer } from './router-configuer';
import { AppConfigLoader } from './app-config-loader';
import { AppLogoConfigurer } from './app-logo-configurer';
import { concatMap, map } from 'rxjs/operators';

@Injectable()
export class AppConfigurer {
  constructor(
    protected appConfigLoader: AppConfigLoader,
    protected routerConfigurer: RouterConfigurer,
    protected appLogoConfigurer: AppLogoConfigurer
  ) {}

  public configure(): Promise<boolean> {
    const loadAppConfig$ = this.appConfigLoader.getAppConfig(
      APP_CONFIGURER_SETTINGS.APP_CONFIG_PATH,
      APP_CONFIGURER_SETTINGS.LOAD_PROFILES
    );

    const configureLogo$ = this.appLogoConfigurer.configure(
      APP_CONFIGURER_SETTINGS.LOGO_NAME
    );

    const configureAppRouter$ = this.routerConfigurer.configure();

    return loadAppConfig$
      .pipe(concatMap(() => configureLogo$))
      .pipe(concatMap(() => configureAppRouter$))
      .pipe(map(() => true))
      .toPromise();
  }
}
