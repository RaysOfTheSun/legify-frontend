import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyDocumentsComponent } from './apply-documents.component';
import { DocumentUploadModalComponent, DocumentUploadPreviewModalComponent } from './components';
import {
  ApplyDocumentsConfigService,
  ApplyDocumentsCreatorService,
  ApplyDocumentsDataService,
  ApplyDocumentsProgessService,
  ApplyDocumentsService
} from './services';
import {
  LegifyModalModule,
  LegifyButtonModule,
  LegifyTaskCardModule,
  LegifyFileUploaderModule,
  FILE_UPLOAD_PREVIEW_MODAL,
  LegifyTaskCardCollectionModule
} from '@legify/web-ui-elements';
import { TranslatableTextModule } from '@legify/web-i18n-elements';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ApplyDocumentUploadModule } from '../apply-document-upload';

@NgModule({
  declarations: [ApplyDocumentsComponent, DocumentUploadModalComponent, DocumentUploadPreviewModalComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    LegifyModalModule,
    LegifyButtonModule,
    LegifyTaskCardModule,
    TranslatableTextModule,
    LegifyFileUploaderModule,
    ApplyDocumentUploadModule,
    LegifyTaskCardCollectionModule
  ],
  providers: [
    ApplyDocumentsService,
    ApplyDocumentsDataService,
    ApplyDocumentsConfigService,
    ApplyDocumentsCreatorService,
    ApplyDocumentsProgessService,
    {
      provide: FILE_UPLOAD_PREVIEW_MODAL,
      useValue: DocumentUploadPreviewModalComponent
    }
  ],
  exports: [ApplyDocumentsComponent]
})
export class ApplyDocumentsModule {}
