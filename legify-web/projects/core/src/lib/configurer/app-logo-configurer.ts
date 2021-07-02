import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { AppConfig, AppConfigService, AppLogoConfig } from '../app';
import { Configurer } from '../app/models/configurer/configurer';

@Injectable()
export class AppLogoConfigurer implements Configurer<boolean> {
  constructor(
    protected domSanitizer: DomSanitizer,
    protected matIconRegistry: MatIconRegistry,
    protected appConfigService: AppConfigService
  ) {}

  protected getLogoConfigs(appConfig: AppConfig): AppLogoConfig {
    const currMarket = this.appConfigService.currMarket;
    return appConfig.logoConfigs.find((config) => config.market === currMarket);
  }

  public configure(logoName: string): Observable<boolean> {
    return new Observable<boolean>((subscriber) => {
      const appConfig = this.appConfigService.appConfig;
      const logoConfigs = this.getLogoConfigs(appConfig);

      const sanitizedUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
        logoConfigs.logoUrl
      );

      this.matIconRegistry.addSvgIcon(logoName, sanitizedUrl);

      subscriber.next(true);
      subscriber.complete();
    });
  }
}
