import { Component } from '@angular/core';
import {NotificationComponent} from "../notification/notification.component";
import {EmailNotificationSender, NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [
    NotificationComponent
  ],
  template: `
    <app-notification [title]="'Email Notification'" (onSend)="sendNotification()"></app-notification>
  `
})
export class EmailComponent {
  private notificationService!: NotificationService;

  constructor() {
    this.notificationService = new NotificationService(new EmailNotificationSender());
  }

  sendNotification() {
    this.notificationService.sendNotification()
  }

}
