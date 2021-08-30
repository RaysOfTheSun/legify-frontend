import { Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppConfigService } from '@legify/web-core';
import { ConsumerDataService } from '../../../../services';
import { BehaviorSubject, Observable } from 'rxjs';
import { concatMap, map, take } from 'rxjs/operators';
import { DOCUMENT_PREVIEW_MODAL_ACTION } from '../../constants';
import {
  DocumentPreviewActionEvent,
  DocumentsUploaderGroupChange,
  DocumentsUploaderGroupInfo,
  DocumentUploadModalData,
  LegifyDocument
} from '../../models';
import { DocumentUploadPreviewModalComponent } from '../document-upload-preview-modal/document-upload-preview-modal.component';
import { ApplyDocumentsService } from '../../services';
import { Person, RequiredDocument } from '../../../../models';

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
    private viewContainerRef: ViewContainerRef,
    protected appConfigService: AppConfigService,
    protected consumerDataService: ConsumerDataService,
    protected applyDocumentService: ApplyDocumentsService
  ) {}

  ngOnInit(): void {}

  get modalOwnerName(): string {
    return this.consumerDataService.getConsumerName(this.data.customer);
  }

  public getGroupInfo(requiredDocument: RequiredDocument): DocumentsUploaderGroupInfo {
    return {
      documentOwner: this.data.customer,
      groupHeaderText: requiredDocument.documentCategory,
      maximumUploads: requiredDocument.maximumUploads,
      minimumUploads: requiredDocument.minimumUploads,
      requiredDocument,
      groupSubHeaderText: ''
    };
  }

  public getDocumentsByDocGroupAndType(
    groupOwner: Person,
    { documentCategory: documentGroup, documentType }: RequiredDocument
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

  public handleFileUpload(uploadEvent: DocumentsUploaderGroupChange): void {
    this.applyDocumentService
      .uploadDocument(uploadEvent.rawFile, uploadEvent.documentOwner, uploadEvent.requiredDocument)
      .subscribe();
  }

  public handleFileDelete(legifyDocument: LegifyDocument): void {
    this.applyDocumentService.deleteDocument(legifyDocument, this.data.customer).pipe(take(1)).subscribe();
  }

  public handleFileReupload(event: any): void {
    const fileList = event.target.files as FileList;
    const rawFile = fileList[0];

    this.documentPreviewActionEventSubj
      .pipe(
        take(1),
        concatMap(({ legifyFile: document, documentOwner, requiredDocument: documentRequirement }) =>
          this.applyDocumentService.reuploadDocument(rawFile, documentOwner, document, documentRequirement)
        )
      )
      .subscribe();
  }

  public handleFilePreview(documentsUploaderGroupChange: DocumentsUploaderGroupChange): void {
    const previewModalClosure$ = this.matDialog
      .open(DocumentUploadPreviewModalComponent, {
        data: documentsUploaderGroupChange,
        ...this.appConfigService.modalConfigs,
        viewContainerRef: this.viewContainerRef
      })
      .afterClosed()
      .pipe(take(1));

    previewModalClosure$.subscribe((documentPreviewActionEvent: DocumentPreviewActionEvent) => {
      if (!documentPreviewActionEvent) {
        return;
      }

      const { legifyFile, userAction, documentOwner, requiredDocument } = documentPreviewActionEvent;

      if (userAction === DOCUMENT_PREVIEW_MODAL_ACTION.DELETE_DOCUMENT) {
        this.applyDocumentService.deleteDocument(legifyFile, this.data.customer).pipe(take(1)).subscribe();
        return;
      }

      if (userAction === DOCUMENT_PREVIEW_MODAL_ACTION.REUPLOAD_DOCUMENT) {
        this.documentPreviewActionEventSubj.next({
          legifyFile,
          documentOwner,
          requiredDocument,
          userAction
        });
        this.fileUploader.nativeElement.click();
        return;
      }
    });
  }
}
