import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routing";

import { AppComponent } from './app.component';

import { ConstantService } from './constant.service';

import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ReEnterpasswordComponent } from './re-enterpassword/re-enterpassword.component';
import { AddDataComponent } from './crud/add-data/add-data.component';
import { ListDataComponent } from './crud/list-data/list-data.component';
import { EditDataComponent } from './crud/edit-data/edit-data.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { ListComponent } from './crudAppB/list/list.component';
import { AddComponent } from './crudAppB/add/add.component';
import { EditComponent } from './crudAppB/edit/edit.component';
import { LoginService } from './login/login.service';
import { AuthService } from './login/auth.service';
import { HomeComponent } from './home/home.component';
import {SummaryPipe} from './home/summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ReEnterpasswordComponent,
    AddDataComponent,
    ListDataComponent,
    EditDataComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    HomeComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastModule,
    routing
  ],
  providers: [LoginService, AuthService, ConstantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
