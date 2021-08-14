import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyBasicInfoRoutingModule } from './apply-basic-info-routing.module';
import { ApplyBasicInfoComponent } from './apply-basic-info.component';
import { LegifyFormsModule } from '@legify/web-ui-elements';

@NgModule({
  declarations: [ApplyBasicInfoComponent],
  imports: [CommonModule, ApplyBasicInfoRoutingModule, LegifyFormsModule]
})
export class ApplyBasicInfoModule {}
