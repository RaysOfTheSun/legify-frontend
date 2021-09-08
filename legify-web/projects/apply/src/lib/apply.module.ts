import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyComponent } from './apply.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { LegifyModalModule, ApplyShellModule } from '@legify/web-ui-elements';
import { NftfModule } from '@legify-features/web-nftf';
import { ApplyService, ConsumerDataService } from './services';
import { MatIconModule } from '@angular/material/icon';
import { ApplyDocumentUploadModule } from './modules';

@NgModule({
  declarations: [ApplyComponent],
  imports: [
    CommonModule,
    NftfModule,
    RouterModule,
    MatIconModule,
    MatDialogModule,
    ApplyShellModule,
    LegifyModalModule,
    ApplyDocumentUploadModule.forRoot()
  ],
  exports: [ApplyComponent],
  providers: [ConsumerDataService, ApplyService]
})
export class ApplyModule {}
