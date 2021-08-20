import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from './file-uploader.component';
import { FileUploaderGroupComponent } from './components/file-uploader-group/file-uploader-group.component';
import { FileUploaderPreviewComponent } from './components/file-uploader-preview/file-uploader-preview.component';
import { MatIconModule } from '@angular/material/icon';
import { TranslatableTextModule } from '@legify/web-i18n-elements';

@NgModule({
  declarations: [FileUploaderComponent, FileUploaderGroupComponent, FileUploaderPreviewComponent],
  imports: [CommonModule, MatIconModule, TranslatableTextModule],
  exports: [FileUploaderComponent, FileUploaderGroupComponent, FileUploaderPreviewComponent]
})
export class LegifyFileUploaderModule {}
