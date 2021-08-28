import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'legify-web-document-upload-item',
  templateUrl: './document-upload-item.component.html',
  styleUrls: ['./document-upload-item.component.scss']
})
export class DocumentUploadItemComponent {
  @Input() src: any;
}
