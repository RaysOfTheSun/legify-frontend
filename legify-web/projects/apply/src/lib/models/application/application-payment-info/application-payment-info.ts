import { PaymentMethod } from '../../../constants/application/payment-method-enum';

export interface ApplicationPaymentInfo {
  method: PaymentMethod;
  transactionId: string;
}
