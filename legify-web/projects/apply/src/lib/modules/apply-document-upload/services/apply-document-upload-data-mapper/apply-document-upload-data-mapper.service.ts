import { Injectable } from '@angular/core';
import { SupportingDocument } from '../../models';
import { RawFile } from '@legify/web-ui-elements';
import { Customer } from '../../../../models';

@Injectable()
export class ApplyDocumentUploadDataMapperService {
  constructor() {}

  public convertRawFileToSupportingDocument(rawFile: RawFile, documentOwner: Customer): SupportingDocument {
    return {
      id: '',
      size: rawFile.size,
      file: rawFile.base64,
      ownerId: documentOwner.id,
      fileType: rawFile.type,
      documentType: '',
      documentCategory: ''
    };
  }
}
