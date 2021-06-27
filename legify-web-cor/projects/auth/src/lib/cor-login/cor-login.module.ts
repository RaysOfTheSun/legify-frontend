import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorLoginRoutingModule } from './cor-login-routing.module';
import { CorLoginComponent } from './cor-login.component';

import {
  LegifyLoginModule,
  LegifyLoginService,
  LegifyLoginConfigService
} from '@legify/web-auth';
import { MarketModule } from '@legify/web-core';
import { CorLoginConfigService, CorLoginService } from './services';

@NgModule({
  declarations: [CorLoginComponent],
  imports: [CommonModule, CorLoginRoutingModule, LegifyLoginModule],
  exports: [CorLoginComponent]
})
export class CorLoginModule {
  static forMarket(): ModuleWithProviders<CorLoginModule> {
    return {
      ngModule: CorLoginModule,
      providers: [
        { provide: LegifyLoginService, useClass: CorLoginService },
        { provide: LegifyLoginConfigService, useClass: CorLoginConfigService }
      ]
    };
  }
}
