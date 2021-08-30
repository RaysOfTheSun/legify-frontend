import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  requirement: RequiredDocument = null;

  @Input()
  header?: string;

  @Output()
  itemClicked: EventEmitter<any> = new EventEmitter();

  @Input()
  subheader?: string;

  protected errorShownSubj: BehaviorSubject<boolean> = new BehaviorSubject(false);
  protected isLackingDocumentsSubj: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    protected applyDocumentUploadService: ApplyDocumentUploadService,
    protected applyDocumentUploadDataProviderService: ApplyDocumentUploadDataProviderService
  ) {}

  ngOnInit(): void {}

  get headerTextId(): string {
    return this.header ? this.header : this.requirement.documentCategory;
  }

  get errorShown$(): Observable<boolean> {
    return this.errorShownSubj.asObservable();
  }

  get isLackingDocuments$(): Observable<boolean> {
    return this.isLackingDocumentsSubj.asObservable();
  }

  get allFiles$(): Observable<SupportingDocument[]> {
    return this.applyDocumentUploadDataProviderService.getAllInvalidDocumentsByOwnerIdAndDocumentType(
      this.documentOwner.id,
      this.requirement.documentType,
      this.requirement.documentCategory
    );
  }

  public handleItemClicked(item: any): void {
    this.itemClicked.emit(item);
  }

  public handleFileAdded({ rawFile }: FileUploadFileAdded): void {
    this.applyDocumentUploadService.uploadDocument(rawFile, this.requirement, this.documentOwner).subscribe();
  }

  public handleItemLimitReached(isItemLimitReached: boolean): void {
    this.errorShownSubj.next(isItemLimitReached);
  }

  public handleItemReplaced({
    modifiedItem,
    modifiedItemIndex,
    modifiedItemReplacement
  }: FileUploadItemModified): void {
    this.applyDocumentUploadService
      .replaceDocument(modifiedItemReplacement, this.requirement, this.documentOwner, modifiedItemIndex)
      .subscribe();
  }

  public handleMinimumUploadsNotReached(isMinimumUploadsNotReached: boolean): void {
    this.isLackingDocumentsSubj.next(isMinimumUploadsNotReached);
  }

  public handleItemRemoved({ modifiedItem, modifiedItemIndex }: FileUploadItemModified): void {
    this.applyDocumentUploadDataProviderService.deleteDocument(modifiedItem, modifiedItemIndex).subscribe();
  }
}
