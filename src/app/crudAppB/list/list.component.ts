import { Component } from '@angular/core';
import { ListService } from './list.service';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
   selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]
})
export class ListComponent {
	  userData: any[] = [];
     count = 0;
	
 constructor(public toastr: ToastsManager, private listService: ListService, public router: Router) {
 	this.listService.getOwnData()
      .subscribe((response) => { 
    this.userData = response;
      }
      );
 }

    

 onEdit(key: string) {
    this.router.navigate(['/editB', key]);
  }

Uid = {
  id: "",
  userId:""
}



  deleteItem(key: string) { 
    this.Uid = {"id": key, 'userId': localStorage.getItem('tokens')};
     this.listService.deleteData(this.Uid)
      .subscribe((response) => { 
    this.toastr.success('Data Delete SuccessFully!', 'Success!');
    location.reload();
      }
      );
  }

  }






