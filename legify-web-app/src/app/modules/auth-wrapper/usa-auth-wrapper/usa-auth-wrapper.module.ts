import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsaAuthWrapperRoutingModule } from './usa-auth-wrapper-routing.module';
import { UsaLoginModule } from '@legify-usa/web-auth';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsaAuthWrapperRoutingModule,
    UsaLoginModule.forMarket()
  ]
})
export class UsaAuthWrapperModule {}
