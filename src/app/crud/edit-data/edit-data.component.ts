import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { EditDataService } from './edit-data.service';

@Component({
   selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css'],
  providers: [EditDataService]
})
export class EditDataComponent implements OnInit {

  constructor(private route: ActivatedRoute, private editDataService: EditDataService, public toastr: ToastsManager,  public router: Router) {}


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
     this.editDataService.getUserData(this.Uid)
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
    console.log("userEdit" + JSON.stringify(this.useredit));
     this.editDataService.submitData(this.useredit)
      .subscribe((response) => { 
    this.toastr.success('Data Update SuccessFully!', 'Success!');
    this.router.navigate(['/list']);
      }
      );
   });
  }

}