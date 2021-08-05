import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppConfigService } from '@legify/web-core';
import { ConsumerDataService } from '../../../../services';
import { BehaviorSubject, Observable } from 'rxjs';
import { concatMap, map, take } from 'rxjs/operators';
import { DOCUMENT_PREVIEW_MODAL_ACTION } from '../../constants';
import {
  DocumentPreviewActionEvent,
  DocumentPreviewEvent,
  DocumentUploadEvent,
  DocumentUploadModalData,
  LegifyDocument,
  LegifyDocumentRequirement
} from '../../models';
import { DocumentUploadPreviewModalComponent } from '../document-upload-preview-modal/document-upload-preview-modal.component';
import { ApplyDocumentsService } from '../../services/index';
import { Customer, Person } from '../../../../models';

@Component({
  selector: 'legify-web-document-upload-modal',
  templateUrl: './document-upload-modal.component.html',
  styleUrls: ['./document-upload-modal.component.scss']
})
export class DocumentUploadModalComponent implements OnInit {
  @ViewChild('fileReuploader', { static: true })
  protected fileUploader: ElementRef<HTMLInputElement>;

  protected readonly documentPreviewActionEventSubj: BehaviorSubject<DocumentPreviewActionEvent> = new BehaviorSubject(
    null
  );

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DocumentUploadModalData,
    protected matDialog: MatDialog,
    protected appConfigService: AppConfigService,
    protected consumerDataService: ConsumerDataService,
    protected applyDocumentService: ApplyDocumentsService
  ) {}

  ngOnInit(): void {}

  get modalOwner(): Customer {
    return this.data.customer;
  }

  get modalOwnerName(): string {
    return this.consumerDataService.getConsumerName(this.data.customer);
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
        return allDocuments.filter(
          (document) =>
            document.ownerId === groupOwner.id &&
            document.documentGroup === documentGroup &&
            document.documentType === documentType
        );
      })
    );
  }

  public handleFileUpload(uploadEvent: DocumentUploadEvent): void {
    this.applyDocumentService
      .uploadDocument(uploadEvent.rawFile, uploadEvent.owner, uploadEvent.documentRequirementMeta)
      .subscribe();
  }

  public handleFileDelete(legifyDocument: LegifyDocument): void {
    this.applyDocumentService.deleteDocument(legifyDocument, this.modalOwner).pipe(take(1)).subscribe();
  }

  public handleFileReupload(event: any): void {
    const fileList = event.target.files as FileList;
    const rawFile = fileList[0];

    this.documentPreviewActionEventSubj
      .pipe(
        take(1),
        concatMap(({ document, documentOwner, documentRequirement }) =>
          this.applyDocumentService.reuploadDocument(rawFile, documentOwner, document, documentRequirement)
        )
      )
      .subscribe();
  }

  public handleFilePreview(documentPreviewEvent: DocumentPreviewEvent): void {
    const previewModalClosure$ = this.matDialog
      .open(DocumentUploadPreviewModalComponent, {
        data: documentPreviewEvent,
        ...this.appConfigService.modalConfigs
      })
      .afterClosed()
      .pipe(take(1));

    previewModalClosure$.subscribe((documentPreviewActionEvent: DocumentPreviewActionEvent) => {
      if (!documentPreviewActionEvent) {
        return;
      }

      const { document, userAction, documentOwner, documentRequirement } = documentPreviewActionEvent;

      if (userAction === DOCUMENT_PREVIEW_MODAL_ACTION.DELETE_DOCUMENT) {
        this.applyDocumentService.deleteDocument(document, this.modalOwner).pipe(take(1)).subscribe();
        return;
      }

      if (userAction === DOCUMENT_PREVIEW_MODAL_ACTION.REUPLOAD_DOCUMENT) {
        this.documentPreviewActionEventSubj.next({
          document,
          documentOwner,
          documentRequirement,
          userAction
        });
        this.fileUploader.nativeElement.click();
        return;
      }
    });
  }
}
