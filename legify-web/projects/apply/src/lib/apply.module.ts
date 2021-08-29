import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyComponent } from './apply.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { LegifyModalModule, ApplyShellModule, LegifyFileUploadModule } from '@legify/web-ui-elements';
import { NftfModule } from '@legify-features/web-nftf';
import { ApplyHttpDataService, ApplyService, ConsumerDataService } from './services';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
import { DocumentUploadItemComponent } from './components/document-upload-item/document-upload-item.component';
import { DocumentUploadInputComponent } from './components/document-upload-input/document-upload-input.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ApplyComponent, DocumentUploadComponent, DocumentUploadItemComponent, DocumentUploadInputComponent],
  imports: [
    CommonModule,
    NftfModule,
    RouterModule,
    MatIconModule,
    MatDialogModule,
    ApplyShellModule,
    LegifyModalModule,
    LegifyFileUploadModule
  ],
  exports: [ApplyComponent],
  providers: [ConsumerDataService, ApplyService, ApplyHttpDataService]
})
export class ApplyModule {}
