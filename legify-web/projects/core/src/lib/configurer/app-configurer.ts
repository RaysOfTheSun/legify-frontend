import { Injectable } from '@angular/core';
import { APP_CONFIGURER_SETTINGS } from '../constants/config/app-configurer-settings';
import { RouterConfigurer } from './router-configuer';
import { AppConfigLoader } from './app-config-loader';
import { AppLogoConfigurer } from './app-logo-configurer';
import { map } from 'rxjs/operators';
import { Observable, zip } from 'rxjs';
import { Configurer } from '../app/models/configurer/configurer';

@Injectable()
export class AppConfigurer implements Configurer<boolean> {
  constructor(
    protected appConfigLoader: AppConfigLoader,
    protected routerConfigurer: RouterConfigurer,
    protected appLogoConfigurer: AppLogoConfigurer
  ) {}

  public configure(): Observable<boolean> {
    const loadAppConfig$ = this.appConfigLoader.getAppConfig(
      APP_CONFIGURER_SETTINGS.APP_CONFIG_PATH,
      APP_CONFIGURER_SETTINGS.LOAD_PROFILES
    );

    const configureAppLogo$ = this.appLogoConfigurer.configure(
      APP_CONFIGURER_SETTINGS.LOGO_NAME
    );

    const configureAppRouter$ = this.routerConfigurer.configure();

    return zip(loadAppConfig$, configureAppLogo$, configureAppRouter$).pipe(
      map(() => true)
    );
  }
}
