import { ModuleWithProviders, NgModule } from '@angular/core';
import { ApplyComponent } from './apply.component';
import {
  LegifyApplyModule,
  LegifyApplyConfigService,
  LegifyApplyService,
  LegifyApplyDataService
} from '@legify/web-apply';
import { RouterModule } from '@angular/router';
import { ApplyConfigService, ApplyService } from './services';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ApplyComponent],
  imports: [CommonModule, LegifyApplyModule, RouterModule],
  exports: [ApplyComponent]
})
export class ApplyModule {
  public static forMarket(): ModuleWithProviders<ApplyModule> {
    return {
      ngModule: ApplyModule,
      providers: [
        LegifyApplyDataService,
        { provide: LegifyApplyService, useClass: ApplyService },
        { provide: LegifyApplyConfigService, useClass: ApplyConfigService }
      ]
    };
  }
}
