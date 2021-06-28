import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthUsaRoutingModule } from './auth-usa-routing.module';
import { UsaLoginModule } from '@legify-usa/web-auth';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthUsaRoutingModule, UsaLoginModule.forMarket()]
})
export class AuthUsaModule {}
