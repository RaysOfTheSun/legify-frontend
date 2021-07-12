import { Person } from '../person';
import { CustomerIdentificationInfo } from './customer-identification-info';

export interface Customer extends Person {
  identificationInfo: CustomerIdentificationInfo;
}
