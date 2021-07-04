import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsaApplyComponent } from './usa-apply.component';
import { LegifyApplyModule } from '@legify/web-apply';
import { RouterModule } from '@angular/router';
import {
  LegifyApplyConfigService,
  LegifyApplyService
} from '@legify/web-apply';
import { UsaApplyConfigService, UsaApplyService } from './services';

@NgModule({
  declarations: [UsaApplyComponent],
  imports: [CommonModule, LegifyApplyModule, RouterModule],
  exports: [UsaApplyComponent]
})
export class UsaApplyModule {
  public static forMarket(): ModuleWithProviders<UsaApplyModule> {
    return {
      ngModule: UsaApplyModule,
      providers: [
        { provide: LegifyApplyService, useClass: UsaApplyService },
        {
          provide: LegifyApplyConfigService,
          useClass: UsaApplyConfigService
        }
      ]
    };
  }
}
