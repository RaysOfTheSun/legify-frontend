import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LegifyLoginModule, LegifyLoginService } from '@legify/web-auth';
import { LoginService } from './services/login/login.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LegifyLoginModule, LoginRoutingModule],
  providers: [
    {
      provide: LegifyLoginService,
      useClass: LoginService
    }
  ]
})
export class LoginModule {}
