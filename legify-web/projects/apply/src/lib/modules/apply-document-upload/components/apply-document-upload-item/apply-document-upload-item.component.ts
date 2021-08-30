import { Component, Input, OnInit } from '@angular/core';
import { SupportingDocument } from '../../models';

@Component({
  selector: 'legify-web-apply-document-upload-item',
  templateUrl: './apply-document-upload-item.component.html',
  styleUrls: ['./apply-document-upload-item.component.scss']
})
export class ApplyDocumentUploadItemComponent implements OnInit {
  @Input()
  src: SupportingDocument;

  constructor() {}

  ngOnInit(): void {}
}
