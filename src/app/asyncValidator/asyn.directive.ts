import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import { Observable, Observer } from 'rxjs';
import {CheckService} from "../services/check.service";
import {map} from "rxjs/operators"
@Directive({
  selector: '[appAsyn]',
  providers:[{provide:NG_ASYNC_VALIDATORS,useExisting:AsynDirective,multi:true}]
})
export class AsynDirective implements AsyncValidator{

  constructor( private serv1:CheckService) { }
  validate(control: AbstractControl):Observable<ValidationErrors | null> {
        
    return this.serv1.checkData().pipe(map(function(res){
       if(res.status){debugger;
           return {asyn:true}
       }
      return null;
    }));
  }
}
