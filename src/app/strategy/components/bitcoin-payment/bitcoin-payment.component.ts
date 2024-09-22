import {Component, inject} from '@angular/core';
import {PaymentComponent} from "../payment/payment.component";
import { BitcoinPaymentStrategy, PaymentService } from '../../services/payment.service';
import { PAYMENT_STRATEGY } from '../../tokens/payment.token';

@Component({
  selector: 'app-bitcoin-payment',
  standalone: true,
  imports: [
    PaymentComponent
  ],
  template: `
  <app-payment [title]="'Bitcoin Payment'" (onPay)="pay($event)"></app-payment>
`,
  providers: [{provide: PAYMENT_STRATEGY, useClass: BitcoinPaymentStrategy}, PaymentService]
})
export class BitcoinPaymentComponent {
  private paymentService = inject(PaymentService);

  pay(amount: number) {
    this.paymentService.pay(amount)
  }
}
