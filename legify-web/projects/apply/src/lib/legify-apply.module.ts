import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyComponent } from './apply.component';
import { RouterModule } from '@angular/router';
import { ApplyShellModule } from '@legify/web-ui-elements';

@NgModule({
  declarations: [ApplyComponent],
  imports: [CommonModule, RouterModule, ApplyShellModule],
  exports: [ApplyComponent]
})
export class LegifyApplyModule {}
