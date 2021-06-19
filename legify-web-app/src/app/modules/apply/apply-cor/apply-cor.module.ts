import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyCorRoutingModule } from './apply-cor-routing.module';
import { AvatarModule } from 'ngx-avatar';
import { LegifyApplyService } from '@legify/web-apply';

@NgModule({
  declarations: [],
  imports: [CommonModule, AvatarModule, ApplyCorRoutingModule],
  providers: [LegifyApplyService]
})
export class ApplyCorModule {}
