import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestDirective } from './dertc/test.directive';
import { StructDirTestDirective } from './dertc/struct-dir-test.directive';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { RestictnameDirective } from './ValidationDir/restictname.directive';
import { CvalidationDirective } from './crossfield/cvalidation.directive';
import {HttpClientModule} from "@angular/common/http";
import { AsynDirective } from './asyncValidator/asyn.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestDirective,
    StructDirTestDirective,
    LoginComponent,
    RestictnameDirective,
    CvalidationDirective,
    AsynDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
