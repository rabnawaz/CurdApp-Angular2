import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AddService } from './add.service';


@Component({
   selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [AddService]
})
export class AddComponent {
    userData: any[] = [];
    
 constructor(public toastr: ToastsManager, private addService: AddService, public router: Router) {

 }
userAdd = {
  title: "",
  description: "",
  userId:"",
  eventId: "",
  date: "",
  completed:""
}



onSaveProfile(form: NgForm) {
   this.userAdd.userId = localStorage.getItem('tokens');
     this.addService.submitData(this.userAdd)
      .subscribe((response) => { 
    this.toastr.success('Data Save SuccessFully!', 'Success!');
    this.router.navigate(['/list']);
      },
                 (error) => { 
                   console.log(error);
                       this.toastr.error('Invalid Email or Password!');
                        }
      );
 
  }

}