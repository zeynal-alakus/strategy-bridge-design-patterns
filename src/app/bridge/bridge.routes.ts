import {BridgeComponent} from "./bridge.component";
import {SmsComponent} from "./components/sms/sms.component";
import {EmailComponent} from "./components/email/email.component";

export const routes = [
  {
    path: '',
    component: BridgeComponent,
    children: [{path: 'sms', component: SmsComponent}, {path: 'email', component: EmailComponent}]
  },
]
