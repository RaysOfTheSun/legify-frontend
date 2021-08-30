import { Injectable } from '@angular/core';
import { SupportingDocument } from '../../models';
import { RawFile } from '@legify/web-ui-elements';
import { Customer, RequiredDocument } from '../../../../models';

@Injectable()
export class ApplyDocumentUploadDataMapperService {
  constructor() {}

  public convertRawFileToSupportingDocument(
    rawFile: RawFile,
    requirement: RequiredDocument,
    documentOwner: Customer
  ): SupportingDocument {
    return {
      id: '',
      name: rawFile.name,
      size: rawFile.size,
      file: rawFile.base64,
      ownerId: documentOwner.id,
      fileType: rawFile.type,
      documentType: requirement.documentType,
      documentCategory: requirement.documentCategory
    };
  }
}
