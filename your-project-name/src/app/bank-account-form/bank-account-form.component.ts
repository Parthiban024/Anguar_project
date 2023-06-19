import { Component } from '@angular/core';

@Component({
  selector: 'app-bank-account-form',
  templateUrl: './bank-account-form.component.html',
  styleUrls: ['./bank-account-form.component.css']
})
export class BankAccountFormComponent {
  showNameInput: boolean = false;
  showAccountNumberInput: boolean = false;
  showIfscCodeInput: boolean = false;
  name: string = '';
  accountNumber: number | undefined;
  ifscCode: string = '';
  isBankAccountAdded: boolean = false;

  submitForm() {
    // You can implement logic here to handle the form submission, e.g., sending data to a server

    // Display the popup
    this.isBankAccountAdded = true;

    // Reset form fields
    this.name = '';
    this.accountNumber = undefined;
    this.ifscCode = '';
  }
}
