import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsaLoginRoutingModule } from './usa-login-routing.module';
import {
  LegifyLoginModule,
  LegifyLoginService,
  LegifyLoginConfigService
} from '@legify/web-auth';
import { UsaLoginComponent } from './usa-login.component';
import { UsaLoginService } from './services/usa-login/usa-login.service';
import { UsaLoginConfigService } from './services/usa-login-config/usa-login-config.service';

@NgModule({
  declarations: [UsaLoginComponent],
  imports: [CommonModule, UsaLoginRoutingModule, LegifyLoginModule],
  exports: [UsaLoginComponent]
})
export class UsaLoginModule {
  public static forMarket(): ModuleWithProviders<UsaLoginModule> {
    return {
      ngModule: UsaLoginModule,
      providers: [
        { provide: LegifyLoginService, useClass: UsaLoginService },
        { provide: LegifyLoginConfigService, useClass: UsaLoginConfigService }
      ]
    };
  }
}
