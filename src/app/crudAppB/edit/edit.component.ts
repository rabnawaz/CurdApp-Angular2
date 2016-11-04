import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { EditService } from './edit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [EditService]
})
export class EditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private editService: EditService, public toastr: ToastsManager,  public router: Router) {}



  useredit = {
  title: "",
  description: "",
  eventId: "",
  date: "",
  completed:"",
  id: "",
  userId:""
}


  Uid = {
	id: "",
} 


  ngOnInit() {
  	 this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
      		this.Uid = {"id": id};
     this.editService.getUserData(this.Uid)
      .subscribe((response) => { 
    this.useredit = response;
      }
      );
       });
  }





onSaveProfile(form: NgForm) {

	this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
      	this.useredit.id = id;
	 this.useredit.userId = localStorage.getItem('tokens');
     this.editService.submitData(this.useredit)
      .subscribe((response) => { 
    this.toastr.success('Data Update SuccessFully!', 'Success!');
    this.router.navigate(['/listB']);
      }
      );
   });
  }

}