import { LEGIFY_APPLICATION_STATUS } from '../../constants';
import { InsuredPerson } from '../insured-person';
import { ApplicationPaymentInfo } from './application-payment-info/application-payment-info';
import { ApplicationProgress } from './application-progress/application-progress';

export interface LegifyApplication {
  id: string;
  name: string;
  owner: InsuredPerson;
  status: LEGIFY_APPLICATION_STATUS;
  insured: InsuredPerson;
  dependents: InsuredPerson[];
  paymentInfo: ApplicationPaymentInfo;
  progressInfo: ApplicationProgress[];
  creationDate: string;
}
