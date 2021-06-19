import { NgModule } from '@angular/core';
import { ApplyComponent } from './apply.component';
import { LegifyApplyModule } from '@legify/web-apply';

@NgModule({
  declarations: [ApplyComponent],
  imports: [LegifyApplyModule],
  exports: [ApplyComponent]
})
export class ApplyModule {}
