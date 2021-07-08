import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DOCUMENT_PREVIEW_MODAL_ACTION } from '../../constants';
import {
  DocumentPreviewActionEvent,
  DocumentPreviewEvent,
  LegifyDocument
} from '../../models';

@Component({
  selector: 'legify-web-document-upload-preview-modal',
  templateUrl: './document-upload-preview-modal.component.html',
  styleUrls: ['./document-upload-preview-modal.component.scss']
})
export class DocumentUploadPreviewModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    protected documentPreviewEvent: DocumentPreviewEvent
  ) {}

  get srcDocument(): LegifyDocument {
    return this.documentPreviewEvent.document;
  }

  get srcDocumentDisplayName(): string {
    return this.srcDocument.filename.slice(
      0,
      this.srcDocument.filename.lastIndexOf('.') - 1
    );
  }

  get dialogReuploadActionResult(): DocumentPreviewActionEvent {
    return {
      ...this.documentPreviewEvent,
      userAction: DOCUMENT_PREVIEW_MODAL_ACTION.REUPLOAD_DOCUMENT
    };
  }

  get dialogDeleteActionResult(): DocumentPreviewActionEvent {
    return {
      ...this.documentPreviewEvent,
      userAction: DOCUMENT_PREVIEW_MODAL_ACTION.DELETE_DOCUMENT
    };
  }
}
