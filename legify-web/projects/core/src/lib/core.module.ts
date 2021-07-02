import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconRegistry } from '@angular/material/icon';
import {
  AppConfigService,
  AppEventService,
  HasSelectedApplicationGuard
} from './app';
import { APP_CONFIGURER_DEPENDENCIES } from './configurer';

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() coreModule?: CoreModule) {
    if (coreModule) {
      throw new Error('You cannot reimport the core module.');
    }
  }

  public static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        MatIconRegistry,
        AppEventService,
        AppConfigService,
        HasSelectedApplicationGuard,
        ...APP_CONFIGURER_DEPENDENCIES
      ]
    };
  }
}
