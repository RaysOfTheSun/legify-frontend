import { Customer } from '../../../models/customer/customer';
import { LegifyDocument } from './legify-document';
import { LegifyDocumentRequirement } from './legify-document-requirement';

export interface DocumentPreviewEvent {
  document: LegifyDocument;
  documentOwner: Customer;
  documentRequirement: LegifyDocumentRequirement;
}
