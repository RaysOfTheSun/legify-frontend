import { ConsumerRole } from '../../../constants';

export interface LegifyDocument {
  file?: string;
  ownerId: string;
  fileType: string;
  forRole: ConsumerRole;
  filename: string;
  readonly?: boolean;
  documentId: string;
  uploadDate: string;
  documentKey: string;
  documentType: string;
  documentGroup: string;
}
