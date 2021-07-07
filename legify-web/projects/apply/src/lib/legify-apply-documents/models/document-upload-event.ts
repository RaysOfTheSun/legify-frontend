import { LegifyDocumentRequirement, Person } from '../../models';

export interface DocumentUploadEvent {
  owner: Person;
  rawFile: File;
  documentRequirementMeta: LegifyDocumentRequirement;
}
