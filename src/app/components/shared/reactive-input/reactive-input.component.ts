import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Functions} from "src/app/shared-values/functions";
import {MatFormFieldAppearance} from "@angular/material/form-field";

@Component({
  selector: 'app-reactive-input',
  templateUrl: './reactive-input.component.html',
  styleUrls: ['./reactive-input.component.scss']
})
export class ReactiveInputComponent implements OnInit {

  @Input() appearance: MatFormFieldAppearance='outline';
  @Input() form?: FormGroup;
  @Input() label: string="";
  @Input() minval?: number;
  @Input() step: string= '0.01';
  @Input() key: string="";
  @Input() placeholder: string=""
  @Input() type: string="text"
  @Input() pattern: string="[\\s\\S]+"
  @Input() id: string="";
  @Input() name: string="";
  @Input() disabled: boolean=false;

  shared_functions= new Functions()

  constructor() { }

  ngOnInit(): void {

  }



  hasPatternError(): boolean {
    return this.shared_functions.hasPatternError(this.form,this.key);
  }

  hasEmailError(): boolean {
    return this.shared_functions.hasEmailError(this.form,this.key);
  }

  hasMinError(): boolean {
    return this.shared_functions.hasMinError(this.form,this.key);
  }

  allSpacesError(): boolean {
    return this.shared_functions.allSpacesError(this.form,this.key);
  }

  notIntegerError(): boolean {
    return this.shared_functions.notIntegerError(this.form,this.key);
  }

  hasFieldError(): boolean {
    return this.shared_functions.hasFieldError(this.form,this.key);
  }
  hasFieldRequiredError(): boolean {
    return this.shared_functions.hasFieldRequiredError(this.form,this.key);
  }

  showError(): boolean {
    const hasRequiredError = this.hasFieldRequiredError();
    const hasSpacesError = this.allSpacesError();
    const hasPatternError = this.hasPatternError();
    const hasEmailError = this.hasEmailError();

    return (hasRequiredError || hasSpacesError) && !hasPatternError && !hasEmailError;
  }

}
