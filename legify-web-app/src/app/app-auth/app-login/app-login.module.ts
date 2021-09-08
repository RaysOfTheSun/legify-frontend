import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoginRoutingModule } from './app-login-routing.module';
import {
  LegifyLoginModule,
  LegifyLoginService,
  LegifyLoginConfigService
} from '@legify/web-auth';

import { CorLoginService, CorLoginConfigService } from '@legify-cor/web-auth';

@NgModule({
  declarations: [],
  imports: [CommonModule, AppLoginRoutingModule, LegifyLoginModule],
  providers: [
    { provide: LegifyLoginService, useClass: CorLoginService },
    { provide: LegifyLoginConfigService, useClass: CorLoginConfigService }
  ]
})
export class AppLoginModule {}
