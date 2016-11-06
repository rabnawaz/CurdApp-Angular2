import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
   selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService],
})
export class HomeComponent {
	  userData: any[] = [];
     count = 0;
     
	
 constructor(public toastr: ToastsManager, private homeService: HomeService, public router: Router) {
 	this.homeService.getOwnData()
      .subscribe((response) => { 
    this.userData = response;
      }
      );
 }

  }

