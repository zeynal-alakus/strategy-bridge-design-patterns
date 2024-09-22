import {Route} from "@angular/router";
import {StrategyComponent} from "./strategy.component";
import {CreditCardPaymentComponent} from "./components/credit-card-payment/credit-card-payment.component";
import {PaypalPaymentComponent} from "./components/paypal-payment/paypal-payment.component";
import {BitcoinPaymentComponent} from "./components/bitcoin-payment/bitcoin-payment.component";

export const routes: Route[] = [
  {
    path: '', component: StrategyComponent, children: [
      {
        path: 'paypal', component: PaypalPaymentComponent
      },
      {
        path: 'credit-card',
        component: CreditCardPaymentComponent
      },
      {
        path: 'bitcoin', component: BitcoinPaymentComponent
      }
    ]
  }
]
