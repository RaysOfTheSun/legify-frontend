import { Customer } from '../../../models';
import { LegifyDocumentRequirement } from './legify-document-requirement';

export interface DocumentUploadEvent {
  owner: Customer;
  rawFile: File;
  documentRequirementMeta: LegifyDocumentRequirement;
}
