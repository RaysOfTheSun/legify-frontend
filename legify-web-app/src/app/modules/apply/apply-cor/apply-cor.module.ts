import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyCorRoutingModule } from './apply-cor-routing.module';
import { AvatarModule } from 'ngx-avatar';
import { CorApplyModule } from '@legify-cor/web-apply';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AvatarModule,
    ApplyCorRoutingModule,
    CorApplyModule.forMarket()
  ]
})
export class ApplyCorModule {}
