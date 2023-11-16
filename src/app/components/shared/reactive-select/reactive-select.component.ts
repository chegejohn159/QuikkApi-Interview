import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Functions} from "src/app/shared-values/functions";

@Component({
  selector: 'app-reactive-select',
  templateUrl: './reactive-select.component.html',
  styleUrls: ['./reactive-select.component.scss']
})
export class ReactiveSelectComponent implements OnInit {

  @Output() on_select: EventEmitter<any> = new EventEmitter();

  @Input() form?: FormGroup;
  @Input()
  choices: any[] =[]
  @Input()
  label: string="";
  @Input()
  key: string="";
  @Input()
  placeholder: string=""
  @Input()
  type: string="text"
  @Input()
  pattern: string="[\\s\\S]+"
  @Input()
  id: string="";
  @Input()
  name: string="";
  @Input()
  required_field: boolean=false;
  @Input()
  disabled: boolean=false;
  @Input()
  multiple: boolean=false;
  @Input() input_width: string="w-full";
  @Input()
  backend_errors: string[]=[];
  shared_functions= new Functions()

  constructor() { }

  ngOnInit(): void {
  }

  on_value_selection(data: any){
    this.on_select.emit(data);
  }

  hasPatternError(): boolean {
    return this.shared_functions.hasPatternError(this.form,this.key);
  }
  hasFieldError(): boolean {
    return this.shared_functions.hasFieldError(this.form,this.key);
  }
  hasFieldRequiredError(): boolean {
    return this.shared_functions.hasFieldRequiredError(this.form,this.key);
  }

}
