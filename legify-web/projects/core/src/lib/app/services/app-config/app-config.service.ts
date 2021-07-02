import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { DEFAULT_LEGIFY_APP_CONFIG, LEGIFY_MARKET } from '../../../constants';
import { AppConfig, UiElementsConfig } from '../../models';

@Injectable()
export class AppConfigService {
  protected readonly appConfigSubj: BehaviorSubject<AppConfig> =
    new BehaviorSubject(DEFAULT_LEGIFY_APP_CONFIG);
  protected _currMarket: LEGIFY_MARKET = LEGIFY_MARKET.COR;

  constructor() {}

  get appConfig(): AppConfig {
    return this.appConfigSubj.getValue();
  }

  get uiElementsConfigs(): UiElementsConfig {
    return this.appConfig.uiElements;
  }

  get currMarket(): LEGIFY_MARKET {
    return this._currMarket;
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
  }

  public setCurrMarket(currMarket: LEGIFY_MARKET): void {
    if (!currMarket) {
      return;
    }

    this._currMarket = currMarket;
  }
}
