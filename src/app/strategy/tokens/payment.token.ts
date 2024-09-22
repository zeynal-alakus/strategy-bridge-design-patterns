import {InjectionToken} from "@angular/core";
import {CreditCardPaymentStrategy, PaymentStrategy} from "../services/payment.service";

export const PAYMENT_STRATEGY = new InjectionToken<PaymentStrategy>("PAYMENT_STRATEGY", {
  providedIn: 'root',
  factory: () => new CreditCardPaymentStrategy()
});
