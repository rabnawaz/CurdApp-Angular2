import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ReEnterpasswordService } from './re-enterpassword.service';

@Component({
  selector: 'app-re-enterpassword',
  templateUrl: './re-enterpassword.component.html',
  styleUrls: ['./re-enterpassword.component.css'],
  providers: [ ReEnterpasswordService ]
})
export class ReEnterpasswordComponent  {

  constructor(private reEnterpasswordService: ReEnterpasswordService , private router: Router, public toastr: ToastsManager, private route: ActivatedRoute,) { }


user = {
	password: "",
  resetToken: ""
}


  resetPassword(form: NgForm) {
    this.route.params
      .map(params => params['token'])
      .subscribe((token) => {
        this.user.resetToken = token
            this.reEnterpasswordService.resetData(this.user)
         .subscribe( (response) => { 
                  this.toastr.success('Password change Successfully!', 'Success!');
            },
                 (error) => { 
                       this.toastr.error('Login failed!', error.message);
                        }
          );
       });
  }





}