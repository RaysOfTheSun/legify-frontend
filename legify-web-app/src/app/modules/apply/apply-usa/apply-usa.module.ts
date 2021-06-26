import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyUsaRoutingModule } from './apply-usa-routing.module';
import { AvatarModule } from 'ngx-avatar';
import { ApplyModule } from '@legify-usa/web-apply';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AvatarModule,
    ApplyUsaRoutingModule,
    ApplyModule.forMaket()
  ]
})
export class ApplyUsaModule {}
