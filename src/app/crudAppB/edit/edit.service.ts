import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import { ConstantService } from  '../../constant.service';

@Injectable()
export class EditService {

    constructor(private http: Http, public constantService: ConstantService) { }


  submitData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.constantService.API_ENDPOINT + 'update.php', body, {
      headers: headers
    })
      .map((data: Response) => data)
  }

	getUserData(user: any) {
	    const body = user;
	    const headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    return this.http.post(this.constantService.API_ENDPOINT + 'getDataById.php', body, {
	      headers: headers
	    })
	      .map((data: Response) => data.json())
	  }

}