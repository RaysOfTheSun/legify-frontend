import { LegifyDocumentRequirement, Person } from '../../models';
import { LegifyDocument } from './legify-document';

export interface DocumentPreviewEvent {
  document: LegifyDocument;
  documentOwner: Person;
  documentRequirement: LegifyDocumentRequirement;
}
