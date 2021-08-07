import { Observable } from 'rxjs';
import { Customer } from '../../../models';
import { LegifyDocumentRequirement } from './legify-document-requirement';

export interface DocumentUploadModalData {
  customer: Customer;
  requiredDocuments: Observable<LegifyDocumentRequirement[]>;
}
