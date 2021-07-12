import { LegifyApplicationStatus } from '../../constants';
import { Customer } from '../customer/customer';
import { ApplicationPaymentInfo } from './application-payment-info/application-payment-info';
import { ApplicationProgress } from './application-progress/application-progress';

export interface LegifyApplication {
  id: string;
  name: string;
  owner: Customer;
  status: LegifyApplicationStatus;
  insured: Customer;
  dependents: Customer[];
  paymentInfo: ApplicationPaymentInfo;
  progressInfo: ApplicationProgress[];
  creationDate: string;
}
