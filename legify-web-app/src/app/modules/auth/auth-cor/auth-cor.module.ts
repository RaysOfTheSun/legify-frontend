import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthCorRoutingModule } from './auth-cor-routing.module';
import { CorLoginModule } from '@legify-cor/web-auth';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthCorRoutingModule, CorLoginModule.forMarket()]
})
export class AuthCorModule {}
