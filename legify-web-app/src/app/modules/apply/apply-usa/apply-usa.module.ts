import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyUsaRoutingModule } from './apply-usa-routing.module';
import { AvatarModule } from 'ngx-avatar';
import { UsaApplyModule } from '@legify-usa/web-apply';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AvatarModule,
    ApplyUsaRoutingModule,
    UsaApplyModule.forMarket()
  ]
})
export class ApplyUsaModule {}
