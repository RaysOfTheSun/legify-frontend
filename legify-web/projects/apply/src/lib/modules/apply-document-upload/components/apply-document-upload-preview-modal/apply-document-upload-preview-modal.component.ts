import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApplyDocumentUploadPreviewModalData } from '../../models';

@Component({
  selector: 'legify-web-apply-document-upload-preview-modal',
  templateUrl: './apply-document-upload-preview-modal.component.html',
  styleUrls: ['./apply-document-upload-preview-modal.component.scss']
})
export class ApplyDocumentUploadPreviewModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ApplyDocumentUploadPreviewModalData) {}

  ngOnInit(): void {}
}
