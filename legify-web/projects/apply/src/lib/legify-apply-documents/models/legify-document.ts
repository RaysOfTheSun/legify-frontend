import { PERSON_ROLE } from '../../constants';

export interface LegifyDocument {
  forRole: PERSON_ROLE;
  filename: string;
  readonly: boolean;
  documentId: string;
  uploadDate: string;
  documentKey: string;
}
