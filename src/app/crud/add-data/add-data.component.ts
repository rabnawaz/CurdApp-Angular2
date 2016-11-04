import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AddDataService } from './add-data.service';


@Component({
    selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
  providers: [AddDataService]
})
export class AddDataComponent {
	  userData: any[] = [];
	
 constructor(public toastr: ToastsManager, private addDataService: AddDataService, public router: Router) {}

 
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
     this.addDataService.submitData(this.userAdd)
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