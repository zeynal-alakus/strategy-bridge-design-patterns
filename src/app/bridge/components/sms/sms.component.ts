import { Component } from '@angular/core';
import {NotificationComponent} from "../notification/notification.component";
import {NotificationService, SMSNotificationSender} from "../../services/notification.service";

@Component({
  selector: 'app-sms',
  standalone: true,
  imports: [
    NotificationComponent
  ],
  template: `
    <app-notification [title]="'SMS Notification'" (onSend)="sendNotification()"></app-notification>
  `
})
export class SmsComponent {
  private notificationService!: NotificationService;

  constructor() {
    this.notificationService = new NotificationService(new SMSNotificationSender());
  }

  sendNotification() {
    this.notificationService.sendNotification()
  }
}
