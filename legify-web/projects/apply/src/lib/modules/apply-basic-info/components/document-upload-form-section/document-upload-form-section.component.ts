import { Component, Input, OnInit } from '@angular/core';
import { FileUploaderGroupInfo } from '@legify/web-ui-elements';

@Component({
  selector: 'legify-web-document-upload-form-section',
  templateUrl: './document-upload-form-section.component.html',
  styleUrls: ['./document-upload-form-section.component.scss']
})
export class DocumentUploadFormSectionComponent implements OnInit {
  @Input() groupInfo: FileUploaderGroupInfo;

  constructor() {}

  ngOnInit(): void {}
}
