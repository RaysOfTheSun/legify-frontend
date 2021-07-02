import { Inject, Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { LEGIFY_MARKET, MARKET_ROUTER_CONFIG_MAP } from '../constants';
import { APP_CONFIGURER_SETTINGS } from '../constants/config/app-configurer-settings';
import { AppConfigService } from '../system';

@Injectable()
export class RouterConfigurer {
  constructor(
    protected router: Router,
    protected appConfigService: AppConfigService,
    @Inject(MARKET_ROUTER_CONFIG_MAP)
    protected marketRouterConfigMap: Map<LEGIFY_MARKET, Routes>
  ) {}

  public configure(): Observable<boolean> {
    return new Observable<boolean>((subscriber) => {
      const currMarket = this.appConfigService.currMarket;
      const routerConfig = this.getRouterConfigFromMap(
        APP_CONFIGURER_SETTINGS.NOT_FOUND_PATH,
        currMarket,
        this.marketRouterConfigMap
      );

      console.log(this.appConfigService.appConfig);
      this.router.resetConfig(routerConfig);
      subscriber.next(true);
      subscriber.complete();
    });
  }

  protected getRouterConfigFromMap(
    defaultRoute: string,
    currSessionMarket: LEGIFY_MARKET,
    marketRouterConfigMap: Map<LEGIFY_MARKET, Routes>
  ): Routes {
    const routerConfigForMarket = marketRouterConfigMap.get(currSessionMarket);

    return [
      ...routerConfigForMarket,
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: defaultRoute
      }
    ];
  }
}
