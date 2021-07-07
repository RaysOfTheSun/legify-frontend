import { Component, Input, OnInit } from '@angular/core';
import { LegifyDocumentRequirement } from '../../../models';
import { LegifyDocument } from '../../models/legify-document';

@Component({
  selector: 'legify-web-document-upload-uploader-group',
  templateUrl: './document-upload-uploader-group.component.html',
  styleUrls: ['./document-upload-uploader-group.component.scss']
})
export class DocumentUploadUploaderGroupComponent {
  @Input() documentMeta: LegifyDocumentRequirement;
  @Input() items: LegifyDocument[] = [];

  constructor() {}

  get isAtMaximumUploads() {
    return this.items.length >= this.documentMeta.maximumUploads;
  }
}
