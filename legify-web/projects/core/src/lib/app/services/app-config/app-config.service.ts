import { Injectable, Optional, SkipSelf } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { MarketSessionMapper } from '../../../utilities';
import { BehaviorSubject } from 'rxjs';
import {
  DEFAULT_LEGIFY_APP_CONFIG,
  LEGIFY_FEATURE,
  LEGIFY_MARKET
} from '../../../constants';
import { AppConfig, FeatureConfig, UiElementsConfig } from '../../models';

@Injectable()
export class AppConfigService {
  protected readonly appConfigSubj: BehaviorSubject<AppConfig> =
    new BehaviorSubject(DEFAULT_LEGIFY_APP_CONFIG);
  protected currSessionMarket: LEGIFY_MARKET = LEGIFY_MARKET.COR;

  constructor() {}

  get appConfig(): AppConfig {
    return this.appConfigSubj.getValue();
  }

  get uiElementsConfigs(): UiElementsConfig {
    return this.appConfig.uiElements;
  }

  get currMarket(): LEGIFY_MARKET {
    return this.currSessionMarket;
  }

  get modalConfigs(): MatDialogConfig {
    return {
      hasBackdrop: false,
      minHeight: '100vh',
      minWidth: '100vw',
      panelClass: ['legify-modal']
    };
  }

  public setAppConfig(appConfig: AppConfig): void {
    this.appConfigSubj.next(appConfig);
    this.currSessionMarket =
      MarketSessionMapper.getCurrMarketFromAppUrlByConfig(appConfig);
  }

  public getFeatureConfig(feature: LEGIFY_FEATURE): FeatureConfig {
    return this.appConfig.features[feature];
  }
}
