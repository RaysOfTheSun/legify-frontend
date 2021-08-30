import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import {
  FileUploadDeleteDirective,
  FileUploadInputDirective,
  FileUploadInvalidItemDirective,
  FileUploadItemDirective,
  FileUploadReuploadDirective
} from './directives';
import { FileUploadPreviewDirective } from './directives/file-upload-preview/file-upload-preview.directive';
import { defaultFileUploadPreviewModalConfig, FILE_UPLOAD_PREVIEW_MODAL_CONFIG } from './constants';
import { FileUploadConfigService } from './services';

@NgModule({
  declarations: [
    FileUploadComponent,
    FileUploadInputDirective,
    FileUploadReuploadDirective,
    FileUploadDeleteDirective,
    FileUploadItemDirective,
    FileUploadInvalidItemDirective,
    FileUploadPreviewDirective
  ],
  imports: [CommonModule],
  exports: [
    FileUploadComponent,
    FileUploadItemDirective,
    FileUploadInputDirective,
    FileUploadDeleteDirective,
    FileUploadPreviewDirective,
    FileUploadReuploadDirective,
    FileUploadInvalidItemDirective
  ],
  providers: [
    {
      provide: FILE_UPLOAD_PREVIEW_MODAL_CONFIG,
      useValue: defaultFileUploadPreviewModalConfig
    },
    FileUploadConfigService
  ]
})
export class LegifyFileUploadModule {}
