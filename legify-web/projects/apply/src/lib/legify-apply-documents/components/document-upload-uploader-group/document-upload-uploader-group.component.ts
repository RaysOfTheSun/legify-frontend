import { Component, Input, OnInit } from '@angular/core';
import { LegifyDocumentRequirement } from '../../../models';

@Component({
  selector: 'legify-web-document-upload-uploader-group',
  templateUrl: './document-upload-uploader-group.component.html',
  styleUrls: ['./document-upload-uploader-group.component.scss']
})
export class DocumentUploadUploaderGroupComponent implements OnInit {
  @Input() documentMeta: LegifyDocumentRequirement;
  public placeHolders = [];

  constructor() {}

  ngOnInit(): void {
    this.placeHolders = Array(this.documentMeta.maximumUploads).fill(0);
  }
}
