import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorApplyComponent } from './cor-apply.component';

import { ModuleWithProviders } from '@angular/core';
import {
  ApplyModule,
  ApplyConfigService,
  ApplyService
} from '@legify/web-apply';
import { RouterModule } from '@angular/router';
import { CorApplyConfigService, CorApplyService } from '../lib/services';

@NgModule({
  declarations: [CorApplyComponent],
  imports: [CommonModule, ApplyModule, RouterModule],
  exports: [CorApplyComponent]
})
export class CorApplyModule {
  public static forMarket(): ModuleWithProviders<CorApplyModule> {
    return {
      ngModule: CorApplyModule,
      providers: [
        { provide: ApplyService, useClass: CorApplyService },
        { provide: ApplyConfigService, useClass: CorApplyConfigService }
      ]
    };
  }
}
