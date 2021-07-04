import { SUPPORTING_DOC_TYPE_GROUP } from '../../legify-apply-documents/constants';

export interface LegifyDocumentRequirement {
  documentType: string;
  documentGroup: SUPPORTING_DOC_TYPE_GROUP;
  minimumUploads: number;
  maximumUploads: number;
}
