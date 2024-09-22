import {Component, inject} from '@angular/core';
import {PaymentComponent} from "../payment/payment.component";
import { CreditCardPaymentStrategy, PaymentService } from '../../services/payment.service';
import { PAYMENT_STRATEGY } from '../../tokens/payment.token';

@Component({
  selector: 'app-credit-card-payment',
  standalone: true,
  imports: [
    PaymentComponent
  ],
  template: `
  <app-payment [title]="'Credit Card Payment'" (onPay)="pay($event)"></app-payment>
`,
  providers: [{provide: PAYMENT_STRATEGY, useClass: CreditCardPaymentStrategy}, PaymentService]
})
export class CreditCardPaymentComponent {
  private paymentService = inject(PaymentService);

  pay(amount: number) {
    this.paymentService.pay(amount)
  }
}
