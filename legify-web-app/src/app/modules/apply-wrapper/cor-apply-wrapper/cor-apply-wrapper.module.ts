import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorApplyWrapperRoutingModule } from './cor-apply-wrapper-routing.module';
import { CorApplyModule } from '@legify-cor/web-apply';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CorApplyWrapperRoutingModule,
    CorApplyModule.forMarket()
  ]
})
export class CorApplyWrapperModule {}
