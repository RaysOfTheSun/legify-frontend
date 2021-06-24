import { Person } from '@legify/web-core';
import { LEGIFY_APPLICATION_STATUS } from '../constants/legify-application-status-enum';

export interface LegifyApplication {
  id: string;
  name: string;
  owner: Person;
  status: LEGIFY_APPLICATION_STATUS;
  insured: Person;
  dependents: Person[];
  creationDate: string;
}
