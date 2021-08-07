import { Injectable } from '@angular/core';
import { LegifyDocument, LegifyDocumentRequirement } from '../../models';

@Injectable()
export class ApplyDocumentsDataService {
  constructor() {}

  public getDocumentsByOnwerId(ownerId: string, allDocuments: LegifyDocument[]): LegifyDocument[] {
    return allDocuments.filter((document) => document.ownerId === ownerId);
  }

  public getDocumentsByRequirementAndOwnerId(
    ownerId: string,
    docRequirement: LegifyDocumentRequirement,
    allDocuments: LegifyDocument[]
  ): LegifyDocument[] {
    return allDocuments.filter(
      (document) =>
        document.ownerId === ownerId &&
        document.documentType === docRequirement.documentType &&
        document.documentGroup === docRequirement.documentGroup
    );
  }
}
