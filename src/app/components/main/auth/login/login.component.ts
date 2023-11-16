import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Snackbar, SpacesValidator} from "../../../../shared-values/functions";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../../../../apis/auth/auth.service";
import {SuccessSnackbarComponent} from "../../../shared/snackbar/success-snackbar/success-snackbar.component";
import {ErrorSnackbarComponent} from "../../../shared/snackbar/error-snackbar/error-snackbar.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loading: boolean = false;

  login_form = new FormGroup({
    email: new FormControl('', [Validators.required, SpacesValidator(), Validators.email]),
    password: new FormControl('', [Validators.required, SpacesValidator()]),
  })
  shared_functions = new Snackbar(this.snackBar)
  constructor( private snackBar: MatSnackBar,
               private auth_service: AuthService,
               private router: Router
               ) {
    this.shared_functions = new Snackbar(this.snackBar)
  }

  login(){
    this.login_form?.markAllAsTouched();
    if (this.login_form?.invalid) return;

    this.loading = true;

    this.auth_service.login(this.login_form.value).subscribe(
      data => {
        this.loading = false;
        this.shared_functions.openSnackbar("Authentication Successful", SuccessSnackbarComponent);
        this.router.navigate(['/secure/my-account'])
      },
      error => {
        this.loading = false;
        this.shared_functions.openSnackbar("Wrong Credentials", ErrorSnackbarComponent);
      }
    )
  }

}
