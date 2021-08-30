import { FileUploadPreviewModalData } from '@legify/web-ui-elements';
import { SupportingDocument } from './supporting-document';

export interface ApplyDocumentUploadPreviewModalData extends FileUploadPreviewModalData<SupportingDocument> {
  documentOwner: any;
}
