import { NgModule } from '@angular/core';
import { ApplyComponent } from './apply.component';
import {
  LegifyApplyModule,
  LegifyApplyConfigService,
  LegifyApplyService
} from '@legify/web-apply';
import { RouterModule } from '@angular/router';
import { ApplyConfigService, ApplyService } from './services';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ApplyComponent],
  imports: [CommonModule, LegifyApplyModule, RouterModule],
  exports: [ApplyComponent],
  providers: [
    { provide: LegifyApplyService, useClass: ApplyService },
    { provide: LegifyApplyConfigService, useClass: ApplyConfigService }
  ]
})
export class ApplyModule {}
