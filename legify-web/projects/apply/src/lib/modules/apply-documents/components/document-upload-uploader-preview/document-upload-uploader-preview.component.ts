import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LegifyDocument } from '../../models';
import { DocumentUploadUploaderComponent } from '../document-upload-uploader/document-upload-uploader.component';

@Component({
  selector: 'legify-web-document-upload-uploader-preview',
  templateUrl: './document-upload-uploader-preview.component.html',
  styleUrls: ['./document-upload-uploader-preview.component.scss']
})
export class DocumentUploadUploaderPreviewComponent {
  @Input() documentSrc: LegifyDocument;

  @Output() handleDelete: EventEmitter<LegifyDocument> = new EventEmitter();
  @Output() handlePreview: EventEmitter<LegifyDocument> = new EventEmitter();

  constructor() {}

  get src(): string {
    return this.documentSrc.file;
  }

  publishDeleteEvent(event: Event): void {
    event.stopPropagation();
    this.handleDelete.emit(this.documentSrc);
  }

  publishPreviewEvent(event: Event): void {
    event.stopPropagation();
    this.handlePreview.emit(this.documentSrc);
  }
}
