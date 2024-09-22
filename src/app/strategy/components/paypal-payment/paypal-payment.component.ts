import { Component, inject } from '@angular/core';
import {PaymentComponent} from "../payment/payment.component";
import { PayPalPaymentStrategy, PaymentService } from '../../services/payment.service';
import { PAYMENT_STRATEGY } from '../../tokens/payment.token';

@Component({
  selector: 'app-paypal-payment',
  standalone: true,
  imports: [
    PaymentComponent
  ],
  template: `
     <app-payment [title]="'Paypal Payment'" (onPay)="pay($event)"></app-payment>
  `,
  providers: [{provide: PAYMENT_STRATEGY, useClass: PayPalPaymentStrategy}, PaymentService]
})
export class PaypalPaymentComponent {
  private paymentService = inject(PaymentService);

  pay(amount: number) {
    this.paymentService.pay(amount)
  }
}
