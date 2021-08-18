import { RequiredDocument } from '../../../models';
import { Customer } from '../../../models/customer/customer';
import { LegifyDocument } from './legify-document';

export interface DocumentPreviewEvent {
  document: LegifyDocument;
  documentOwner: Customer;
  documentRequirement: RequiredDocument;
}
