import { Injectable } from '@angular/core';
import { APP_CONFIGURER_SETTINGS } from '../constants/config/app-configurer-settings';
import { AppConfigLoader } from './app-config-loader';
import { AppLogoConfigurer } from './app-logo-configurer';
import { concatMap, map } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { Configurer } from '../app/models/configurer/configurer';

@Injectable()
export class AppConfigurer implements Configurer<boolean> {
  constructor(protected appConfigLoader: AppConfigLoader, protected appLogoConfigurer: AppLogoConfigurer) {}

  public configure(): Observable<boolean> {
    const loadAppConfig$ = this.appConfigLoader.getAppConfig(
      APP_CONFIGURER_SETTINGS.APP_CONFIG_PATH,
      APP_CONFIGURER_SETTINGS.LOAD_PROFILES
    );

    const configureAppLogo$ = this.appLogoConfigurer.configure(APP_CONFIGURER_SETTINGS.LOGO_NAME);

    const configApp$ = [configureAppLogo$];

    return loadAppConfig$.pipe(
      concatMap(() => forkJoin(configApp$)),
      map(() => true)
    );
  }
}
