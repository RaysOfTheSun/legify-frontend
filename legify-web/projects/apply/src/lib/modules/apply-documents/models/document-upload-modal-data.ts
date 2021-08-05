import { Observable } from 'rxjs';
import { LegifyDocumentRequirement, Person } from '../../models';
import { Customer } from '../../models/customer/customer';

export interface DocumentUploadModalData {
  customer: Customer;
  requiredDocuments: Observable<LegifyDocumentRequirement[]>;
}
