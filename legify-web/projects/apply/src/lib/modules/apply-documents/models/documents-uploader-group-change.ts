import { FileUploaderGroupChange } from '@legify/web-ui-elements';
import { Customer, RequiredDocument } from '../../../models';
import { LegifyDocument } from './legify-document';

export interface DocumentsUploaderGroupChange extends FileUploaderGroupChange {
  legifyFile: LegifyDocument;
  documentOwner: Customer;
  requiredDocument: RequiredDocument;
}
