import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import {
  LegifyLoginModule,
  LegifyLoginService,
  LegifyLoginConfigService
} from '@legify/web-auth';
import { LoginConfigService, LoginService } from './services';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, LegifyLoginModule],
  exports: [LoginComponent],
  providers: [
    {
      provide: LegifyLoginService,
      useClass: LoginService
    },
    {
      provide: LegifyLoginConfigService,
      useClass: LoginConfigService
    }
  ]
})
export class LoginModule {}
