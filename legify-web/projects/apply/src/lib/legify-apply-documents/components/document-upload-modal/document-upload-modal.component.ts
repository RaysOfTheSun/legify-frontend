import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppConfigService } from '@legify/web-core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { LegifyDocumentRequirement, Person } from '../../../models';
import { LegifyApplyPersonMapperService } from '../../../services';
import { DOCUMENT_PREVIEW_MODAL_ACTION } from '../../constants';
import {
  DocumentPreviewActionEvent,
  DocumentPreviewEvent,
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
  @ViewChild('fileReuploader', { static: true })
  protected fileUploader: ElementRef<HTMLInputElement>;

  protected readonly documentPreviewActionEventSubj: BehaviorSubject<DocumentPreviewActionEvent> =
    new BehaviorSubject(null);

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
    this.applyDocumentService.uploadFile(uploadEvent);
  }

  public handleFileDelete(legifyDocument: LegifyDocument): void {
    this.applyDocumentService.deleteDocument(legifyDocument);
  }

  public handleFileReupload(event: any): void {
    const fileList = event.target.files as FileList;
    const rawFile = fileList[0];

    this.documentPreviewActionEventSubj
      .pipe(take(1))
      .subscribe(({ document, documentOwner, documentRequirement }) =>
        this.applyDocumentService.reuploadFile(
          rawFile,
          documentOwner,
          document,
          documentRequirement
        )
      );
  }

  public handleFilePreview(documentPreviewEvent: DocumentPreviewEvent): void {
    const previewModalClosure$ = this.matDialog
      .open(DocumentUploadPreviewModalComponent, {
        data: documentPreviewEvent,
        ...this.appConfigService.modalConfigs
      })
      .afterClosed()
      .pipe(take(1));

    previewModalClosure$.subscribe(
      (documentPreviewActionEvent: DocumentPreviewActionEvent) => {
        if (!documentPreviewActionEvent) {
          return;
        }

        const { document, userAction, documentOwner, documentRequirement } =
          documentPreviewActionEvent;

        if (userAction === DOCUMENT_PREVIEW_MODAL_ACTION.DELETE_DOCUMENT) {
          this.applyDocumentService.deleteDocument(document);
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
      }
    );
  }
}
