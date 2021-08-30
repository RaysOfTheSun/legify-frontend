import { Injectable } from '@angular/core';
import { RequiredDocument } from '../../../../models';
import { LegifyDocument } from '../../models';

@Injectable()
export class ApplyDocumentsDataService {
  constructor() {}

  public getDocumentsByOnwerId(ownerId: string, allDocuments: LegifyDocument[]): LegifyDocument[] {
    return allDocuments.filter((document) => document.ownerId === ownerId);
  }

  public getDocumentsByRequirementAndOwnerId(
    ownerId: string,
    docRequirement: RequiredDocument,
    allDocuments: LegifyDocument[]
  ): LegifyDocument[] {
    return allDocuments.filter(
      (document) =>
        document.ownerId === ownerId &&
        document.documentType === docRequirement.documentType &&
        document.documentGroup === docRequirement.documentCategory
    );
  }
}
