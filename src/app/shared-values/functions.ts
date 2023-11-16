import {ComponentType} from "@angular/cdk/overlay";
import {Location} from '@angular/common'

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import {MatDialog} from '@angular/material/dialog';
import {inject} from "@angular/core";
import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {Router} from "@angular/router";
import {Countries} from "./countries";

export class Functions {
  location: Location
  router: Router

  constructor() {
    this.location = inject(Location)
    this.router= inject(Router)
  }

  back() {
    this.location.back();
  }

  hasPatternError(form: any, key: any): boolean {
    return (
      form.get(key).errors?.['pattern'] &&
      (form.get(key).dirty ||
        form.get(key).touched)
    );
  }

  hasFieldError(form: any, key: any): boolean {
    return (
      form?.get(key)?.invalid &&
      (form?.get(key).dirty ||
        form?.get(key).touched)
    );
  }

  invalidPhoneError(form: any, key: any): boolean {
    return (
      form.get(key).errors?.['invalidPhone'] &&
      (form.get(key).dirty ||
        form.get(key).touched)
    );
  }

  allSpacesError(form: any, key: any): boolean {
    return (
      form.get(key).errors?.['allSpaces'] &&
      (form.get(key).dirty ||
        form.get(key).touched)
    );
  }

  notIntegerError(form: any, key: any): boolean {
    return (
      form.get(key).errors?.['notInteger'] &&
      (form.get(key).dirty ||
        form.get(key).touched)
    );
  }

  hasFieldRequiredError(form: any, key: any): boolean {
    return (
      form.get(key).errors?.['required'] &&
      (form.get(key).dirty ||
        form.get(key).touched)
    );
  }

  isFieldRequired(form: any, key: any): boolean {
    return (
      form.get(key).isFieldRequired
    )
  }

  hasMinError(form: any, key: any): boolean {
    return (
      form.get(key).errors?.['min'] &&
      (form.get(key).dirty ||
        form.get(key).touched)
    );
  }

  hasMaxLengthError(form: any, key: any): boolean {
    return (
      form.get(key).errors?.['maxlength'] &&
      (form.get(key).dirty ||
        form.get(key).touched)
    );
  }

  hasEmailError(form: any, key: any): boolean {
    return (
      form.get(key).errors?.['email'] &&
      (form.get(key).dirty ||
        form.get(key).touched)
    );
  }

  hasMinDateError(form: any, key: any): boolean {
    return (
      form.get(key).errors?.['minDate'] &&
      (form.get(key).dirty ||
        form.get(key).touched)
    );
  }}

export class Snackbar {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private snackBar: MatSnackBar) {
  }

  openSnackbar(message: string, component: ComponentType<any>, duration: number = 5000) {
    this.snackBar?.openFromComponent(component, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['blue-snackbar'],
      duration: duration,
      data: {
        message: message
      }
    });
  }
}


export function IntegerValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value === null || value === undefined || value === '') {
      return null; // Allow empty values (if not required)
    }
    const isInteger = Number.isInteger(+value);
    return isInteger ? null : {notInteger: true};
  };
}

// Custom validator for min date
export function minDateValidator(minDate: Date) {
  return (control: any) => {
    const selectedDate = new Date(control.value);
    return selectedDate < minDate ? { minDate: true } : null;
  };
}

export function SpacesValidator(): ValidatorFn {
  const regex = /^(?!\s*$)[^\n]*$/m;

  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!regex.test(value)) {
      return {allSpaces: true};
    }
    return null;
  };
}
