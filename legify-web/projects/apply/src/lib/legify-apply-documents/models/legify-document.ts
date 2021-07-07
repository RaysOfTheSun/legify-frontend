import { PERSON_ROLE } from '../../constants';

export interface LegifyDocument {
  file?: string;
  ownerId: string;
  forRole: PERSON_ROLE;
  filename: string;
  readonly?: boolean;
  documentId: string;
  uploadDate: string;
  documentKey: string;
  documentType: string;
  documentGroup: string;
}
