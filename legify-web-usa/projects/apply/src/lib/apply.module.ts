import { ModuleWithProviders, NgModule } from '@angular/core';
import { ApplyComponent } from './apply.component';
import {
  LegifyApplyModule,
  LegifyApplyService,
  LegifyApplyConfigService,
  LegifyApplyHttpDataService
} from '@legify/web-apply';
import { ApplyConfigService } from './services';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ApplyComponent],
  imports: [CommonModule, LegifyApplyModule, RouterModule],
  exports: [ApplyComponent]
})
export class ApplyModule {
  public static forMaket(): ModuleWithProviders<ApplyModule> {
    return {
      ngModule: ApplyModule,
      providers: [
        LegifyApplyService,
        LegifyApplyHttpDataService,
        { provide: LegifyApplyConfigService, useClass: ApplyConfigService }
      ]
    };
  }
}
