import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyDocumentsComponent } from './apply-documents.component';
import {
  DocumentUploadModalComponent,
  DocumentUploadUploaderComponent,
  DocumentUploadPreviewModalComponent,
  DocumentUploadUploaderGroupComponent,
  DocumentUploadUploaderPreviewComponent
} from './components';
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
  LegifyTaskCardCollectionModule
} from '@legify/web-ui-elements';
import { TranslatableTextModule } from '@legify/web-i18n-elements';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ApplyDocumentsComponent,
    DocumentUploadModalComponent,
    DocumentUploadUploaderComponent,
    DocumentUploadPreviewModalComponent,
    DocumentUploadUploaderGroupComponent,
    DocumentUploadUploaderPreviewComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    LegifyModalModule,
    LegifyButtonModule,
    LegifyTaskCardModule,
    TranslatableTextModule,
    LegifyTaskCardCollectionModule
  ],
  providers: [
    ApplyDocumentsService,
    ApplyDocumentsDataService,
    ApplyDocumentsConfigService,
    ApplyDocumentsCreatorService,
    ApplyDocumentsProgessService
  ],
  exports: [ApplyDocumentsComponent]
})
export class ApplyDocumentsModule {}
