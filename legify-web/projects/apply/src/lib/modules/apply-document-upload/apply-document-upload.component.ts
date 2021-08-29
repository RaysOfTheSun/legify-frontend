import { Component, Input, OnInit } from '@angular/core';
import { FileUploadFileAdded, FileUploadItemModified } from '@legify/web-ui-elements';
import { Observable } from 'rxjs';
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

  constructor(
    protected applyDocumentUploadService: ApplyDocumentUploadService,
    protected applyDocumentUploadDataProviderService: ApplyDocumentUploadDataProviderService
  ) {}

  ngOnInit(): void {}

  public handleFileAdded({ rawFile }: FileUploadFileAdded): void {
    this.applyDocumentUploadService.uploadDocument(rawFile, this.documentOwner).subscribe();
  }

  public handleItemLimitReached(isItemLimitReached: boolean): void {
    console.log('limit reached?:', isItemLimitReached);
  }

  public handleItemRemoved({ modifiedItem, modifiedItemIndex }: FileUploadItemModified): void {
    this.applyDocumentUploadDataProviderService.deleteDocument(modifiedItem, modifiedItemIndex).subscribe();
  }

  get allFiles$(): Observable<SupportingDocument[]> {
    return this.applyDocumentUploadDataProviderService.allDocuments$;
  }
}
