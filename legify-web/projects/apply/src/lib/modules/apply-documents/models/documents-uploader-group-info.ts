import { FileUploaderGroupInfo } from '@legify/web-ui-elements';
import { Customer, RequiredDocument } from '../../../models';

export interface DocumentsUploaderGroupInfo extends FileUploaderGroupInfo {
  documentOwner: Customer;
  requiredDocument: RequiredDocument;
}
