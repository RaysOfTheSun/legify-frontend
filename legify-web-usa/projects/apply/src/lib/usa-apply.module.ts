import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsaApplyComponent } from './usa-apply.component';
import { ApplyModule } from '@legify/web-apply';
import { RouterModule } from '@angular/router';
import { ApplyConfigService, ApplyService } from '@legify/web-apply';
import { UsaApplyConfigService, UsaApplyService } from './services';

@NgModule({
  declarations: [UsaApplyComponent],
  imports: [CommonModule, ApplyModule, RouterModule],
  exports: [UsaApplyComponent]
})
export class UsaApplyModule {
  public static forMarket(): ModuleWithProviders<UsaApplyModule> {
    return {
      ngModule: UsaApplyModule,
      providers: [
        { provide: ApplyService, useClass: UsaApplyService },
        {
          provide: ApplyConfigService,
          useClass: UsaApplyConfigService
        }
      ]
    };
  }
}
