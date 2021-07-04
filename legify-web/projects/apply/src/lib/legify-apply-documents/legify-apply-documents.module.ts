import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegifyApplyDocumentsRoutingModule } from './legify-apply-documents-routing.module';
import { ApplyDocumentsComponent } from './apply-documents.component';
import {
  LegifyModalModule,
  LegifyButtonModule,
  LegifyTaskCardModule,
  LegifyTaskCardCollectionModule
} from '@legify/web-ui-elements';
import { DocumentUploadModalComponent } from './components/document-upload-modal/document-upload-modal.component';
import {
  LegifyApplyDocumentsService,
  LegifyApplyDocumentsConfigService
} from './services';
import { MatIconModule } from '@angular/material/icon';
import { DocumentUploadUploaderComponent } from './components/document-upload-uploader/document-upload-uploader.component';
import { DocumentUploadUploaderGroupComponent } from './components/document-upload-uploader-group/document-upload-uploader-group.component';

@NgModule({
  declarations: [
    ApplyDocumentsComponent,
    DocumentUploadModalComponent,
    DocumentUploadUploaderComponent,
    DocumentUploadUploaderGroupComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    LegifyButtonModule,
    LegifyModalModule,
    LegifyTaskCardModule,
    LegifyTaskCardCollectionModule,
    LegifyApplyDocumentsRoutingModule
  ],
  exports: [
    DocumentUploadModalComponent,
    ApplyDocumentsComponent,
    DocumentUploadUploaderComponent
  ],
  providers: [LegifyApplyDocumentsService, LegifyApplyDocumentsConfigService]
})
export class LegifyApplyDocumentsModule {}
