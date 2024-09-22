import { inject } from "@angular/core";
import { SnackbarService } from "../../shared/snackbar.service";

export interface NotificationSender {
  sendMessage(): string;
}

export class EmailNotificationSender implements NotificationSender {
  sendMessage(): string {
    return 'Sending Email notification:';
  }
}

export class SMSNotificationSender implements NotificationSender {
  sendMessage(): string {
    return 'Sending SMS notification:';
  }
}

export class NotificationService {
  private snackbarService = inject(SnackbarService)

  constructor(private notificationSender: NotificationSender) {
  }

  sendNotification() {
    const message = this.notificationSender.sendMessage();
    this.snackbarService.open(message);
  }
}
