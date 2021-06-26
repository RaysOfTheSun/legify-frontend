import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegifyApplyDocumentsRoutingModule } from './legify-apply-documents-routing.module';
import { ApplyDocumentsComponent } from './apply-documents.component';
import {
  LegifyModalModule,
  LegifyTaskCardModule,
  LegifyTaskCardCollectionModule
} from '@legify/web-ui-elements';
import { DocumentUploadModalComponent } from './components/document-upload-modal/document-upload-modal.component';
import {
  LegifyApplyDocumentsService,
  LegifyApplyDocumentsConfigService
} from './services';

@NgModule({
  declarations: [ApplyDocumentsComponent, DocumentUploadModalComponent],
  imports: [
    CommonModule,
    LegifyModalModule,
    LegifyModalModule,
    LegifyTaskCardModule,
    LegifyTaskCardCollectionModule,
    LegifyApplyDocumentsRoutingModule
  ],
  exports: [DocumentUploadModalComponent, ApplyDocumentsComponent],
  providers: [LegifyApplyDocumentsService, LegifyApplyDocumentsConfigService]
})
export class LegifyApplyDocumentsModule {}
