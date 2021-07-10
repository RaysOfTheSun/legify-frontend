import { Injectable } from '@angular/core';
import { LegifyDocumentRequirement } from '../../../models';
import { LegifyDocument } from '../../models';

@Injectable()
export class LegifyApplyDocumentsDataService {
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
