import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyDocumentsComponent } from './apply-documents.component';
import { DocumentUploadModalComponent } from './components';
import { ApplyDocumentsConfigService, ApplyDocumentsProgessService, ApplyDocumentsService } from './services';
import { LegifyModalModule, LegifyButtonModule } from '@legify/web-ui-elements';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ApplyDocumentUploadModule } from '../apply-document-upload';
import { ApplyUiElementsModule } from '../apply-ui-elements/apply-ui-elements.module';

@NgModule({
  declarations: [ApplyDocumentsComponent, DocumentUploadModalComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    LegifyModalModule,
    LegifyButtonModule,
    ApplyDocumentUploadModule,
    ApplyUiElementsModule
  ],
  providers: [ApplyDocumentsService, ApplyDocumentsConfigService, ApplyDocumentsProgessService],
  exports: [ApplyDocumentsComponent]
})
export class ApplyDocumentsModule {}
