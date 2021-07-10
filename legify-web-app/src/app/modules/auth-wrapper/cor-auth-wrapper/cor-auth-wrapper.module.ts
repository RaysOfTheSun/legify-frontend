import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorAuthWrapperRoutingModule } from './cor-auth-wrapper-routing.module';
import { CorLoginModule } from '@legify-cor/web-auth';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CorLoginModule.forMarket(),
    CorAuthWrapperRoutingModule
  ]
})
export class CorAuthWrapperModule {}
