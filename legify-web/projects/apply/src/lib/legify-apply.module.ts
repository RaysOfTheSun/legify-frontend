import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyComponent } from './apply.component';
import { RouterModule } from '@angular/router';
import { ApplyShellModule } from '@legify/web-ui-elements';
import { LegifyApplyService } from './services/legify-apply/legify-apply.service';
import { LegifyApplyConfigService } from './services/legify-apply-config/legify-apply-config.service';
import {
  LegifyTaskCardModule,
  LegifyTaskCardCollectionModule
} from '@legify/web-ui-elements';

@NgModule({
  declarations: [ApplyComponent],
  imports: [
    CommonModule,
    RouterModule,
    ApplyShellModule,
    LegifyTaskCardModule,
    LegifyTaskCardCollectionModule
  ],
  exports: [ApplyComponent],
  providers: [LegifyApplyService, LegifyApplyConfigService]
})
export class LegifyApplyModule {}
