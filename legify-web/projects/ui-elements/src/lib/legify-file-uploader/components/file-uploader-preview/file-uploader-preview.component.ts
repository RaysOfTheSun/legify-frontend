import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LegifyFile } from '../../models';

@Component({
  selector: 'legify-web-file-uploader-preview',
  templateUrl: './file-uploader-preview.component.html',
  styleUrls: ['./file-uploader-preview.component.scss']
})
export class FileUploaderPreviewComponent {
  @Input() documentSrc: LegifyFile;

  @Output() handleDelete: EventEmitter<LegifyFile> = new EventEmitter();
  @Output() handlePreview: EventEmitter<LegifyFile> = new EventEmitter();

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
