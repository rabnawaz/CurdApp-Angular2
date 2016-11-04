import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import { ConstantService } from  '../constant.service';

@Injectable()
export class LoginService {

  constructor(private http: Http, public constantService: ConstantService) { }


   loginData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.constantService.API_ENDPOINT + 'login.php', body, {
      headers: headers
    })
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  getOwnData() {
    const body= '';
    return this.http.post(this.constantService.API_ENDPOINT + 'login_page_list.php', body)
      .map((response: Response) => response.json());
  }



     isAuthenticated() {
    var user = localStorage.getItem('token') !== null;
    console.log("user is " + user);

      if (user) {
     let roles = localStorage.getItem('usertype');
      return true;
    } else {
      return false;
    }
  }

   private handleError (error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }

}
