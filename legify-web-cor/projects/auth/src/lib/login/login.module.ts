import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {
  LegifyLoginModule,
  LegifyLoginService,
  LegifyLoginConfigService
} from '@legify/web-auth';
import { LoginService } from './services/login/login.service';
import { LoginConfigService } from './services/login-config/login-config.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LegifyLoginModule, LoginRoutingModule],
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
