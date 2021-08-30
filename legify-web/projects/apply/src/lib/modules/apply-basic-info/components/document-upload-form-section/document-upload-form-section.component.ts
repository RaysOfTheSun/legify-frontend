import { Component, Input, OnInit } from '@angular/core';
import { Customer, RequiredDocument } from '../../../../models';

@Component({
  selector: 'legify-web-document-upload-form-section',
  templateUrl: './document-upload-form-section.component.html',
  styleUrls: ['./document-upload-form-section.component.scss']
})
export class DocumentUploadFormSectionComponent implements OnInit {
  @Input()
  requirement: RequiredDocument;

  @Input()
  documentOwner: Customer;

  constructor() {}

  ngOnInit(): void {}

  get documentUploadHeader(): string {
    return `COPY_OF_${this.requirement.documentType}`;
  }
}
