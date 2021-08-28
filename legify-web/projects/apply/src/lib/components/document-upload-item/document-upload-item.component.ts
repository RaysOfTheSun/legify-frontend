import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'legify-web-document-upload-item',
  templateUrl: './document-upload-item.component.html',
  styleUrls: ['./document-upload-item.component.scss']
})
export class DocumentUploadItemComponent {
  @Input() src: any;

  @Output() handleDelete: EventEmitter<any> = new EventEmitter();
  @Output() handlePreview: EventEmitter<any> = new EventEmitter();

  publishDeleteEvent(event: Event): void {
    event.stopPropagation();
    this.handleDelete.emit(this.src);
  }

  publishPreviewEvent(event: Event): void {
    event.stopPropagation();
    this.handlePreview.emit(this.src);
  }
}
