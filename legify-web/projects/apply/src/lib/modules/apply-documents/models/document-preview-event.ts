import { RequiredDocument } from '../../../models';
import { Customer } from '../../../models/customer/customer';
import { LegifyDocument } from './legify-document';

export interface DocumentPreviewEvent {
  legifyFile: LegifyDocument;
  documentOwner: Customer;
  requiredDocument: RequiredDocument;
}
