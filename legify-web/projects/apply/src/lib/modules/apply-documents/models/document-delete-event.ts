import { Person } from '../../models';
import { LegifyDocument } from './legify-document';

export interface DocumentDeleteEvent {
  document: LegifyDocument;
  documentOwner: Person;
}
