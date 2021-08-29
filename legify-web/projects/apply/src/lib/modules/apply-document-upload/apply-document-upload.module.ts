import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyDocumentUploadComponent } from './apply-document-upload.component';
import {
  ApplyDocumentUploadConfigService,
  ApplyDocumentUploadDataMapperService,
  ApplyDocumentUploadDataProviderService,
  ApplyDocumentUploadService
} from './services';
import { ApplyDocumentUploadItemComponent } from './components/apply-document-upload-item/apply-document-upload-item.component';
import { ApplyDocumentUploadInputComponent } from './components/apply-document-upload-input/apply-document-upload-input.component';
import { ApplyDocumentUploadPreviewModalComponent } from './components/apply-document-upload-preview-modal/apply-document-upload-preview-modal.component';
import { LegifyFileUploadModule, LegifyTextListModule } from '@legify/web-ui-elements';
import { LegifyI18nModule } from '@legify/web-i18n';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ApplyDocumentUploadComponent,
    ApplyDocumentUploadItemComponent,
    ApplyDocumentUploadInputComponent,
    ApplyDocumentUploadPreviewModalComponent
  ],
  imports: [CommonModule, MatIconModule, LegifyFileUploadModule, LegifyTextListModule, LegifyI18nModule],
  exports: [ApplyDocumentUploadComponent, ApplyDocumentUploadPreviewModalComponent],
  providers: [ApplyDocumentUploadService, ApplyDocumentUploadConfigService, ApplyDocumentUploadDataMapperService]
})
export class ApplyDocumentUploadModule {
  public static forRoot(): ModuleWithProviders<ApplyDocumentUploadModule> {
    return {
      ngModule: ApplyDocumentUploadModule,
      providers: [ApplyDocumentUploadDataProviderService]
    };
  }
}
