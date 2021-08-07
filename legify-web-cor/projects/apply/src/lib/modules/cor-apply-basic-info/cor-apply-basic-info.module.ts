import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorApplyBasicInfoRoutingModule } from './cor-apply-basic-info-routing.module';
import { ApplyBasicInfoModule } from '@legify/web-apply';

@NgModule({
  declarations: [],
  imports: [CommonModule, CorApplyBasicInfoRoutingModule, ApplyBasicInfoModule]
})
export class CorApplyBasicInfoModule {}
