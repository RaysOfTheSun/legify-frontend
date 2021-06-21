import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { LegifyLoginModule } from '@legify/web-auth';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, LegifyLoginModule],
  exports: [LoginComponent]
})
export class LoginModule {}
