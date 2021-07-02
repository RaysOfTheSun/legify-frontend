import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfigService, SystemEventService } from './services';
import { HasSelectedApplicationGuard } from './guards';

import { MatIconRegistry } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class SystemModule {
  public static forRoot(): ModuleWithProviders<SystemModule> {
    return {
      ngModule: SystemModule,
      providers: [
        MatIconRegistry,
        AppConfigService,
        SystemEventService,
        HasSelectedApplicationGuard
      ]
    };
  }
}
