import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { LegifyAppConfig, UiElementsConfigs } from '../../../utilities';

@Injectable()
export class AppConfigService {
  protected readonly appConfigSubj: BehaviorSubject<LegifyAppConfig> =
    new BehaviorSubject(null);

  constructor() {}

  get appConfig(): LegifyAppConfig {
    return this.appConfigSubj.getValue();
  }

  get uiElementsConfigs(): UiElementsConfigs {
    return this.appConfig.uiElements;
  }

  get modalConfigs(): MatDialogConfig {
    return {
      hasBackdrop: false,
      minHeight: '100vh',
      minWidth: '100vw',
      panelClass: ['legify-modal']
    };
  }

  public updateAppConfig(appConfig: LegifyAppConfig): void {
    this.appConfigSubj.next(appConfig);
  }
}
