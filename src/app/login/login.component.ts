import { Component, OnInit } from '@angular/core';
import {CheckService} from "../services/check.service"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserName:String;
  currentPassword:String;
  constructor(private s1:CheckService) {
    this.UserName="";
    this.currentPassword="";
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.currentPassword);
    console.log(this.UserName);
    this.s1.checkData().subscribe(function(data){
      console.log("data is "+data);
    });
  }

}
