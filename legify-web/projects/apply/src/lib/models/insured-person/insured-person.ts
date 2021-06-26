import { Person } from '../person';

export interface InsuredPerson extends Person {
  isPolicyOwner?: boolean;
}
