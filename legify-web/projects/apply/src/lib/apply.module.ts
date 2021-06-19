import { NgModule } from '@angular/core';
import { ApplyComponent } from './apply.component';
import { ApplyShellModule } from '@legify/web-ui-elements';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ApplyComponent],
  imports: [ApplyShellModule, RouterModule],
  exports: [ApplyComponent]
})
export class ApplyModule {}
