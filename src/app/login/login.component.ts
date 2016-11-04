import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { LoginService } from './login.service';
declare var jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {
  userData: any[] = [];

  constructor(private loginService: LoginService , private router: Router, public toastr: ToastsManager) {
    this.loginService.getOwnData()
      .subscribe((response) => { 
    this.userData = response;
      }
      );
       }


  user = {
  email: "",
  password: ""
};


    onLogin(form: NgForm) {
     console.log("user id is" + JSON.stringify(this.user));
     this.loginService.loginData(this.user)
         .subscribe( (response) => { 
     				console.log("response is :-" + JSON.stringify(response));
                  var tokenId = response.user_id;
                  localStorage.setItem('token', "bearer "+ tokenId);
                  localStorage.setItem('tokens',  tokenId);
                       localStorage.setItem('usertype',  response.userType);
                       const userType = response.userType;
                       console.log(userType);
                       if(userType == "userA"){
                         this.router.navigate(['list'])
                       }
                       else if(userType == "userB"){
                         this.router.navigate(['listB'])
                       }
                       else{
                         this.toastr.error(response);
                       }
            },
                 (error) => { 
                   console.log(error);
                       this.toastr.error('Invalid Email or Password!');
                        }
          );
  }



}

