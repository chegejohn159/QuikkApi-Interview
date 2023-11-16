import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IntegerValidator, Snackbar, SpacesValidator} from "../../../../../shared-values/functions";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../../../../../apis/auth/auth.service";
import {Router} from "@angular/router";
import {SuccessSnackbarComponent} from "../../../../shared/snackbar/success-snackbar/success-snackbar.component";
import {ErrorSnackbarComponent} from "../../../../shared/snackbar/error-snackbar/error-snackbar.component";
import {MyAccountService} from "../../../../../apis/my-account/my-account.service";

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.scss']
})
export class SendMoneyComponent {
  loading: boolean = false;

  send_money_form = new FormGroup({
    phone_number: new FormControl('', [Validators.required, SpacesValidator()]),
    amount: new FormControl('', [Validators.required, Validators.min(10), SpacesValidator(), IntegerValidator()]),
  })

  shared_functions = new Snackbar(this.snackBar)
  constructor( public dialogRef: MatDialogRef<SendMoneyComponent>,
               private snackBar: MatSnackBar,
               private account_service: MyAccountService,
               private router: Router
  ) {
    this.shared_functions = new Snackbar(this.snackBar)
  }

  close() {
    this.dialogRef.close({event: 'close'});
  }

  send_money(){
    this.send_money_form?.markAllAsTouched();
    if (this.send_money_form?.invalid) return;

    this.loading = true;

    this.account_service.send_money(this.send_money_form.value).subscribe(
      data => {
        this.loading = false;
        this.shared_functions.openSnackbar("Transaction Successful", SuccessSnackbarComponent);
        this.close();
      },
      error => {
        this.loading = false;
        this.shared_functions.openSnackbar("An Error Occurred", ErrorSnackbarComponent);
      }
    )
  }

}
