import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { AppConfigService } from '../system';
import { LegifyAppConfig, LogoConfig } from '../utilities';

@Injectable()
export class AppLogoConfigurer {
  constructor(
    protected domSanitizer: DomSanitizer,
    protected matIconRegistry: MatIconRegistry,
    protected appConfigService: AppConfigService
  ) {}

  protected getLogoConfigs(appConfig: LegifyAppConfig): LogoConfig {
    const currMarket = this.appConfigService.currMarket;
    return appConfig.logoConfigs.find((config) => config.market === currMarket);
  }

  public configure(logoName: string): Observable<boolean> {
    const appConfig = this.appConfigService.appConfig;
    return new Observable<boolean>((subscriber) => {
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
