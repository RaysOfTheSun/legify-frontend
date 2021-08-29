import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FileUploadFileAdded, FileUploadItemModified } from '@legify/web-ui-elements';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer, RequiredDocument } from '../../models';
import { SupportingDocument } from './models';
import { ApplyDocumentUploadDataProviderService, ApplyDocumentUploadService } from './services';

@Component({
  selector: 'legify-web-apply-document-upload',
  templateUrl: './apply-document-upload.component.html',
  styleUrls: ['./apply-document-upload.component.scss']
})
export class ApplyDocumentUploadComponent implements OnInit {
  @Input()
  documentOwner: Customer;

  @Input()
  requirement: RequiredDocument;

  @Input()
  header?: string;

  @Input()
  subheader?: string;

  protected errorShownSubj: BehaviorSubject<boolean> = new BehaviorSubject(false);
  protected isLackingDocumentsSubj: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    protected applyDocumentUploadService: ApplyDocumentUploadService,
    protected applyDocumentUploadDataProviderService: ApplyDocumentUploadDataProviderService
  ) {}

  ngOnInit(): void {}

  get errorShown$(): Observable<boolean> {
    return this.errorShownSubj.asObservable();
  }

  get isLackingDocuments$(): Observable<boolean> {
    return this.isLackingDocumentsSubj.asObservable();
  }

  get allFiles$(): Observable<SupportingDocument[]> {
    return this.applyDocumentUploadDataProviderService.allDocuments$;
  }

  public handleFileAdded({ rawFile }: FileUploadFileAdded): void {
    this.applyDocumentUploadService.uploadDocument(rawFile, this.documentOwner).subscribe();
  }

  public handleItemLimitReached(isItemLimitReached: boolean): void {
    this.errorShownSubj.next(isItemLimitReached);
  }

  public handleMinimumUploadsNotReached(isMinimumUploadsNotReached: boolean): void {
    this.isLackingDocumentsSubj.next(isMinimumUploadsNotReached);
  }

  public handleItemRemoved({ modifiedItem, modifiedItemIndex }: FileUploadItemModified): void {
    this.applyDocumentUploadDataProviderService.deleteDocument(modifiedItem, modifiedItemIndex).subscribe();
  }
}
