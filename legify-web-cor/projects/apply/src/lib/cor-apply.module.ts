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

@NgModule({
  declarations: [CorApplyComponent],
  imports: [CommonModule, ApplyModule, RouterModule],
  exports: []
})
export class CorApplyModule {
  public static forMarket(): ModuleWithProviders<CorApplyModule> {
    return {
      ngModule: CorApplyModule
    };
  }
}
