import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Person } from '../../../models';
import { LegifyDocumentRequirement } from '../../../models';
import { DocumentPreviewEvent, DocumentUploadEvent } from '../../models';
import { LegifyDocument } from '../../models/legify-document';

@Component({
  selector: 'legify-web-document-upload-uploader-group',
  templateUrl: './document-upload-uploader-group.component.html',
  styleUrls: ['./document-upload-uploader-group.component.scss']
})
export class DocumentUploadUploaderGroupComponent {
  @Input() items: LegifyDocument[] = [];
  @Input() groupOwner: Person;
  @Input() documentMeta: LegifyDocumentRequirement;

  @Output() handleFileUpload: EventEmitter<DocumentUploadEvent> = new EventEmitter();
  @Output() handleFilePreview: EventEmitter<DocumentPreviewEvent> = new EventEmitter();
  @Output() handleFileDelete: EventEmitter<LegifyDocument> = new EventEmitter();

  @ViewChild('fileUploader', { static: true })
  protected fileUploader: ElementRef<HTMLInputElement>;

  constructor() {}

  get isAtMaximumUploads(): boolean {
    return this.items.length >= this.documentMeta.maximumUploads;
  }

  public handleFileUploaderClick(): void {
    this.fileUploader.nativeElement.click();
  }

  public publishFileUpload(event: any): void {
    const rawFiles: FileList = event.target.files;
    this.handleFileUpload.emit({
      owner: this.groupOwner,
      rawFile: rawFiles[0],
      documentRequirementMeta: this.documentMeta
    });
  }

  public publishDeleteEvent(legifyDocument: LegifyDocument): void {
    this.handleFileDelete.emit(legifyDocument);
  }

  public publishFilePreviewEvent(legifyDocument: LegifyDocument): void {
    this.handleFilePreview.emit({
      document: legifyDocument,
      documentOwner: this.groupOwner,
      documentRequirement: this.documentMeta
    });
  }
}
