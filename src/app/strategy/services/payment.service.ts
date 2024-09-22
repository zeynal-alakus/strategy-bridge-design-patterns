import {inject, Injectable} from "@angular/core";
import {PAYMENT_STRATEGY} from "../tokens/payment.token";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import { SnackbarService } from "../../shared/snackbar.service";

export interface PaymentStrategy {
  pay: (amount: number) => string
}

export class CreditCardPaymentStrategy implements PaymentStrategy {
  pay(amount: number) {
    return `Paid ${amount} using Credit Card.`;
  }
}

export class PayPalPaymentStrategy implements PaymentStrategy {
  pay(amount: number) {
    return `Paid ${amount} using PayPal.`;
  }
}

export class BitcoinPaymentStrategy implements PaymentStrategy {
  pay(amount: number) {
    return `Paid ${amount} using Bitcoin.`;
  }
}


@Injectable()
export class PaymentService {
  private snackbarService = inject(SnackbarService);
  private paymentStrategy = inject(PAYMENT_STRATEGY)

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  pay(amount: number) {
    const message = this.paymentStrategy.pay(amount);
    this.snackbarService.open(message);
  }
}


