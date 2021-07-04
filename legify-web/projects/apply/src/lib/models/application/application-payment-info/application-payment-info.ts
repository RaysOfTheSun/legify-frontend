import { APPLICATION_PAYMENT_METHOD } from '../../../constants/application-payment-info-method-eum';

export interface ApplicationPaymentInfo {
  method: APPLICATION_PAYMENT_METHOD;
  transactionId: string;
}
