import { Observable } from 'rxjs';
import { LegifyDocumentRequirement, Person } from '../../models';

export interface DocumentUploadModalData {
  person: Person;
  requiredDocuments: Observable<LegifyDocumentRequirement[]>;
}
