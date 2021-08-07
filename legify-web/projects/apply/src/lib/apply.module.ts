import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyComponent } from './apply.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { LegifyModalModule, ApplyShellModule } from '@legify/web-ui-elements';
import { NftfModule } from '@legify-features/web-nftf';
import { ApplyHttpDataService, ApplyService, ConsumerDataService } from './services';

@NgModule({
  declarations: [ApplyComponent],
  imports: [CommonModule, RouterModule, ApplyShellModule, MatDialogModule, LegifyModalModule, NftfModule],
  exports: [ApplyComponent],
  providers: [ConsumerDataService, ApplyService, ApplyHttpDataService]
})
export class ApplyModule {}
