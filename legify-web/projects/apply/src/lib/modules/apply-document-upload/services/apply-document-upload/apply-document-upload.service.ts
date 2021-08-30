import { Injectable } from '@angular/core';
import { RawFile } from '@legify/web-ui-elements';
import { Customer, RequiredDocument } from '../../../../models';
import { Observable } from 'rxjs';
import { SupportingDocument } from '../../models';
import { ApplyDocumentUploadDataMapperService } from '../apply-document-upload-data-mapper/apply-document-upload-data-mapper.service';
import { ApplyDocumentUploadDataProviderService } from '../apply-document-upload-data-provider/apply-document-upload-data-provider.service';

@Injectable()
export class ApplyDocumentUploadService {
  constructor(
    protected documentUploadDataMapperService: ApplyDocumentUploadDataMapperService,
    protected documentUploadDataProviderService: ApplyDocumentUploadDataProviderService
  ) {}

  public uploadDocument(
    rawFile: RawFile,
    requirement: RequiredDocument,
    documentOwner: Customer
  ): Observable<SupportingDocument[]> {
    const supportingDocumentToUpload = this.documentUploadDataMapperService.convertRawFileToSupportingDocument(
      rawFile,
      requirement,
      documentOwner
    );
    return this.documentUploadDataProviderService.addNewDocument(supportingDocumentToUpload);
  }

  public replaceDocument(
    rawFile: RawFile,
    requirement: RequiredDocument,
    documentOwner: Customer,
    replaceDocumentAtIndex: number
  ): Observable<SupportingDocument[]> {
    const supportingDocumentToUpload = this.documentUploadDataMapperService.convertRawFileToSupportingDocument(
      rawFile,
      requirement,
      documentOwner
    );

    return this.documentUploadDataProviderService.replaceDocument(
      null,
      supportingDocumentToUpload,
      replaceDocumentAtIndex
    );
  }
}
