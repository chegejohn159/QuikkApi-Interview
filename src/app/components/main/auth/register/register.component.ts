import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Snackbar, SpacesValidator} from "../../../../shared-values/functions";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../../../../apis/auth/auth.service";
import {Router} from "@angular/router";
import {SuccessSnackbarComponent} from "../../../shared/snackbar/success-snackbar/success-snackbar.component";
import {ErrorSnackbarComponent} from "../../../shared/snackbar/error-snackbar/error-snackbar.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  loading: boolean = false;

  registration_form = new FormGroup({
    first_name: new FormControl('', [Validators.required, SpacesValidator()]),
    last_name: new FormControl('', [Validators.required, SpacesValidator()]),
    email: new FormControl('', [Validators.required, SpacesValidator(), Validators.email]),
    country: new FormControl('Kenya', [Validators.required, SpacesValidator()]),
    city: new FormControl('', [Validators.required, SpacesValidator()]),
    phone_number: new FormControl('', [Validators.required, SpacesValidator()]),
    password: new FormControl('', [Validators.required, SpacesValidator()]),
    confirm_password: new FormControl('', [Validators.required, SpacesValidator()]),
  })
  shared_functions = new Snackbar(this.snackBar)
  constructor( private snackBar: MatSnackBar,
               private auth_service: AuthService,
               private router: Router
  ) {
    this.shared_functions = new Snackbar(this.snackBar)
  }

  register(){
    this.registration_form?.markAllAsTouched();
    if (this.registration_form?.invalid) return;

    this.loading = true;

    this.auth_service.register(this.registration_form.value).subscribe(
      data => {
        this.loading = false;
        this.shared_functions.openSnackbar("Registration Successful", SuccessSnackbarComponent);
        this.router.navigate(['/secure/my-account'])
      },
      error => {
        console.log(error)
        this.loading = false;
        this.shared_functions.openSnackbar("Registration Failed", ErrorSnackbarComponent);
      }
    )
  }

}
