import { LEGIFY_APPLICATION_STATUS } from '../../constants';
import { InsuredPerson } from '../insured-person';

export interface LegifyApplication {
  id: string;
  name: string;
  owner: InsuredPerson;
  status: LEGIFY_APPLICATION_STATUS;
  insured: InsuredPerson;
  dependents: InsuredPerson[];
  creationDate: string;
}
