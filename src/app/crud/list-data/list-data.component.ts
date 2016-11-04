import { Component } from '@angular/core';
import { ListDataService } from './list-data.service';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
   selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css'],
  providers: [ListDataService]
})
export class ListDataComponent {
	  userData: any[] = [];
 constructor(public toastr: ToastsManager, private listDataService: ListDataService, public router: Router) {
 	this.listDataService.getOwnData()
      .subscribe((response) => { 
    this.userData = response;
      }
      );
 }





Uid = {
  id: "",
  userId:""
}
 onEdit(key: string) {
    this.router.navigate(['/edit', key]);
  }


  deleteItem(key: string) { 
    this.Uid = {"id": key, 'userId': localStorage.getItem('tokens')};
     this.listDataService.deleteData(this.Uid)
      .subscribe((response) => { 
    this.toastr.success('Data Delete SuccessFully!', 'Success!');
    location.reload();
      }
      );
  }
  }