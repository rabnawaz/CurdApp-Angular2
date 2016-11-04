import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ForgetPasswordService } from './forget-password.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
  providers: [ForgetPasswordService]
})
export class ForgetPasswordComponent  {

  constructor(private forgetPasswordService: ForgetPasswordService , private router: Router, public toastr: ToastsManager) { }


user = {
	email:""
}

    OnForgetpassword(form: NgForm) {
     console.log("user id is" + JSON.stringify(this.user));
     this.forgetPasswordService.forgetData(this.user)
         .subscribe( (response) => { 
                  this.toastr.success('Email Successfully!', 'Success!');
            },
                 (error) => { 
                       this.toastr.error('Login failed!', error.message);
                        }
          );
  }


}
