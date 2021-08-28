import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { FileUploadPreviewItemDirective } from './directives/file-upload-preview-item/file-upload-preview-item.directive';
import { HostClickDirective } from './directives/host-click/host-click.directive';
import { FileUploadPreviewInvalidItemDirective } from './directives/file-upload-preview-invalid-item/file-upload-preview-invalid-item.directive';
import { FileUploadInputDirective } from './directives/file-upload-input/file-upload-input.directive';
import { FileUploadService } from './services';

@NgModule({
  declarations: [
    FileUploadComponent,
    FileUploadPreviewItemDirective,
    HostClickDirective,
    FileUploadPreviewInvalidItemDirective,
    FileUploadInputDirective
  ],
  imports: [CommonModule],
  exports: [
    FileUploadComponent,
    FileUploadPreviewItemDirective,
    FileUploadPreviewInvalidItemDirective,
    FileUploadInputDirective
  ],
  providers: [FileUploadService]
})
export class LegifyFileUploadModule {}
