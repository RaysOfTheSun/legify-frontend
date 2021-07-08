import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppConfigService } from '@legify/web-core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LegifyDocumentRequirement, Person } from '../../../models';
import { LegifyApplyPersonMapperService } from '../../../services';
import {
  DocumentUploadEvent,
  DocumentUploadModalData,
  LegifyDocument
} from '../../models';
import { LegifyApplyDocumentsService } from '../../services';
import { DocumentUploadPreviewModalComponent } from '../document-upload-preview-modal/document-upload-preview-modal.component';

@Component({
  selector: 'legify-web-document-upload-modal',
  templateUrl: './document-upload-modal.component.html',
  styleUrls: ['./document-upload-modal.component.scss']
})
export class DocumentUploadModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DocumentUploadModalData,
    protected matDialog: MatDialog,
    protected appConfigService: AppConfigService,
    protected applyDocumentService: LegifyApplyDocumentsService,
    protected legifyApplyPersonMapper: LegifyApplyPersonMapperService
  ) {}

  ngOnInit(): void {}

  get modalOwner(): Person {
    return this.data.person;
  }

  get modalOwnerName(): string {
    return this.legifyApplyPersonMapper.getPersonName(this.data.person);
  }

  get requiredDocuments(): Observable<LegifyDocumentRequirement[]> {
    return this.data.requiredDocuments;
  }

  public getDocumentsByDocGroupAndType(
    groupOwner: Person,
    { documentGroup, documentType }: LegifyDocumentRequirement
  ): Observable<LegifyDocument[]> {
    return this.applyDocumentService.allDocuments$.pipe(
      map((allDocuments) => {
        const docs = allDocuments.filter(
          (document) =>
            document.ownerId === groupOwner.id &&
            document.documentGroup === documentGroup &&
            document.documentType === documentType
        );

        return docs;
      })
    );
  }

  public handleFileUpload(uploadEvent: DocumentUploadEvent): void {
    this.applyDocumentService.uploadFile(uploadEvent);
  }

  public handleFileDelete(legifyDocument: LegifyDocument): void {
    this.applyDocumentService.deleteDocument(legifyDocument);
  }

  public handleFilePreview(legifyDocument: LegifyDocument): void {
    this.matDialog.open(DocumentUploadPreviewModalComponent, {
      data: legifyDocument,
      ...this.appConfigService.modalConfigs
    });
  }
}
