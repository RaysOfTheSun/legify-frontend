import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsaApplyWrapperRoutingModule } from './usa-apply-wrapper-routing.module';
import { UsaApplyModule } from '@legify-usa/web-apply';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsaApplyWrapperRoutingModule,
    UsaApplyModule.forMarket()
  ]
})
export class UsaApplyWrapperModule {}
