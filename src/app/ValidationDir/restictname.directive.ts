import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms"
@Directive({
  selector: '[appRestictname]',
   providers:[{provide:NG_VALIDATORS,useExisting:RestictnameDirective,multi:true}]
})
export class RestictnameDirective implements Validator {

  constructor() { }
validate(control: AbstractControl): ValidationErrors | null {
       let value=control.value;
       if(value=="admin"){
         return {spc:"admil not allow"}
       }
       return null;
}
}
