import { LegifyDocumentRequirement, Person } from '../../models';
import { Customer } from '../../models/customer/customer';

export interface DocumentUploadEvent {
  owner: Customer;
  rawFile: File;
  documentRequirementMeta: LegifyDocumentRequirement;
}
