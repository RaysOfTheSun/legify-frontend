import { Observable } from 'rxjs';
import { Customer, RequiredDocument } from '../../../models';

export interface DocumentUploadModalData {
  customer: Customer;
  requiredDocuments: Observable<RequiredDocument[]>;
}
