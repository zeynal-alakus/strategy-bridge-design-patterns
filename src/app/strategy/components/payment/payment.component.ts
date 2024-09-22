import {Component, inject, input, InputSignal, output} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel, MatPrefix, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardTitle,
    MatCardActions,
    MatCardHeader,
    MatCardContent,
    MatFormField,
    MatInput,
    MatLabel,
    MatPrefix,
    MatSuffix,
    FormsModule
  ],
  template: `
    <mat-card appearance="outlined">
      <mat-card-header>
        <mat-card-title>{{title()}}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-form-field floatLabel="always">
          <mat-label>Amount</mat-label>
          <input [(ngModel)]="amount" matInput type="number" class="example-right-align"  />
          <span matTextPrefix>$&nbsp;</span>
          <span matTextSuffix>.00</span>
        </mat-form-field>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button (click)="pay()">Pay</button>
      </mat-card-actions>
    </mat-card>
  `,
})
export class PaymentComponent {
  title = input.required<string>();
  onPay = output<number>()
  amount = 10;

  pay() {
    this.onPay.emit(this.amount)
  }
}
