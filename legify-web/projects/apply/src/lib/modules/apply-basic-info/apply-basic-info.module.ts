import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyBasicInfoRoutingModule } from './apply-basic-info-routing.module';
import { ApplyBasicInfoComponent } from './apply-basic-info.component';

@NgModule({
  declarations: [ApplyBasicInfoComponent],
  imports: [CommonModule, ApplyBasicInfoRoutingModule]
})
export class ApplyBasicInfoModule {}
