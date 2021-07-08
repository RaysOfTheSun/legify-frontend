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
  LegifyApplyDocumentsConfigService,
  LegifyApplyDocumentsDocumentMapperService
} from './services';
import { MatIconModule } from '@angular/material/icon';
import { DocumentUploadUploaderComponent } from './components/document-upload-uploader/document-upload-uploader.component';
import { DocumentUploadUploaderGroupComponent } from './components/document-upload-uploader-group/document-upload-uploader-group.component';
import { TranslatableTextModule } from '@legify/web-i18n-elements';
import { DocumentUploadUploaderPreviewComponent } from './components/document-upload-uploader-preview/document-upload-uploader-preview.component';
import { MatButtonModule } from '@angular/material/button';
import { DocumentUploadPreviewModalComponent } from './components/document-upload-preview-modal/document-upload-preview-modal.component';

@NgModule({
  declarations: [
    ApplyDocumentsComponent,
    DocumentUploadModalComponent,
    DocumentUploadUploaderComponent,
    DocumentUploadUploaderGroupComponent,
    DocumentUploadUploaderPreviewComponent,
    DocumentUploadPreviewModalComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    LegifyModalModule,
    LegifyButtonModule,
    LegifyTaskCardModule,
    TranslatableTextModule,
    LegifyTaskCardCollectionModule,
    LegifyApplyDocumentsRoutingModule
  ],
  exports: [
    DocumentUploadModalComponent,
    ApplyDocumentsComponent,
    DocumentUploadUploaderComponent
  ],
  providers: [
    LegifyApplyDocumentsService,
    LegifyApplyDocumentsConfigService,
    LegifyApplyDocumentsDocumentMapperService
  ]
})
export class LegifyApplyDocumentsModule {}
