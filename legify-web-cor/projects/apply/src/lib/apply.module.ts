import { NgModule } from '@angular/core';
import { ApplyComponent } from './apply.component';
import { ApplyShellModule } from '@legify/web-ui-elements';

@NgModule({
  declarations: [ApplyComponent],
  imports: [ApplyShellModule],
  exports: [ApplyComponent]
})
export class ApplyModule {}
