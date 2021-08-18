import { Customer, RequiredDocument } from '../../../models';

export interface DocumentUploadEvent {
  owner: Customer;
  rawFile: File;
  documentRequirementMeta: RequiredDocument;
}
