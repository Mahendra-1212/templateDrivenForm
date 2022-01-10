import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
@Directive({
  selector: '[appCvalidation]',
  providers:[{provide:NG_VALIDATORS,useExisting:CvalidationDirective,multi:true}]
})
export class CvalidationDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {debugger;
     if(control.value.UserName!="" && control.value.currentPassword!="" && control.value.currentPassword==control.value.UserName ){
       return {ing:"username and password should not same"}
     }
      return null;
  }

}
