import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable, Observer } from 'rxjs';
import {map} from "rxjs/operators"
@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor(private httpc:HttpClient) { }

  checkData():Observable<any>{debugger;
    return this.httpc.get<any>("http://localhost:3000/getData").pipe(map(function(result){
   console.log(result);
   return result;
    }));
  }

  checkCoRS():Observable<any>{
    return this.httpc.get("http://localhost:3000/getData");
  }
}
