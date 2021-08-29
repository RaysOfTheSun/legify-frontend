import { Injectable } from '@angular/core';
import { RawFile } from '@legify/web-ui-elements';
import { Customer } from '../../../../models';
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

  public uploadDocument(rawFile: RawFile, documentOwner: Customer): Observable<SupportingDocument[]> {
    const supportingDocumentToUpload = this.documentUploadDataMapperService.convertRawFileToSupportingDocument(
      rawFile,
      documentOwner
    );
    return this.documentUploadDataProviderService.addNewDocument(supportingDocumentToUpload);
  }
}
