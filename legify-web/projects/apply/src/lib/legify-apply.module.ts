import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyComponent } from './apply.component';
import { RouterModule } from '@angular/router';
import { LegifyApplyService } from './services/legify-apply/legify-apply.service';
import { LegifyApplyConfigService } from './services/legify-apply-config/legify-apply-config.service';
import { MatDialogModule } from '@angular/material/dialog';
import { LegifyModalModule, ApplyShellModule } from '@legify/web-ui-elements';
import { LegifyApplyDataService, LegifyApplyHttpDataService } from './services';
import { LegifyApplyPersonMapperService } from './services/legify-apply-person-mapper/legify-apply-person-mapper.service';

@NgModule({
  declarations: [ApplyComponent],
  imports: [
    CommonModule,
    RouterModule,
    ApplyShellModule,
    MatDialogModule,
    LegifyModalModule
  ],
  exports: [ApplyComponent],
  providers: [
    LegifyApplyService,
    LegifyApplyDataService,
    LegifyApplyConfigService,
    LegifyApplyHttpDataService,
    LegifyApplyPersonMapperService
  ]
})
export class LegifyApplyModule {}
