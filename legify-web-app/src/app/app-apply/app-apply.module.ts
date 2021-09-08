import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppApplyRoutingModule } from './app-apply-routing.module';
import { ApplyModule } from '@legify/web-apply';

@NgModule({
  declarations: [],
  imports: [CommonModule, AppApplyRoutingModule, ApplyModule]
})
export class AppApplyModule {}
