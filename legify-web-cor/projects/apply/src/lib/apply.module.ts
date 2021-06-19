import { NgModule } from '@angular/core';
import { ApplyComponent } from './apply.component';
import { LegifyApplyModule } from '@legify/web-apply';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ApplyComponent],
  imports: [LegifyApplyModule, RouterModule],
  exports: [ApplyComponent]
})
export class ApplyModule {}
