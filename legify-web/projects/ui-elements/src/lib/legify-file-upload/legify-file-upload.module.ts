import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { FileUploadEventService, FileUploadService } from './services';
import {
  FileUploadDeleteDirective,
  FileUploadInputDirective,
  FileUploadInvalidItemDirective,
  FileUploadItemDirective,
  FileUploadReuploadDirective
} from './directives';
import { FileUploadPreviewDirective } from './directives/file-upload-preview/file-upload-preview.directive';

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
  providers: [FileUploadService, FileUploadEventService]
})
export class LegifyFileUploadModule {}
