import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'legify-web-document-upload-form-section',
  templateUrl: './document-upload-form-section.component.html',
  styleUrls: ['./document-upload-form-section.component.scss']
})
export class DocumentUploadFormSectionComponent implements OnInit {
  @Input() groupInfo: any;

  constructor() {}

  ngOnInit(): void {}
}
