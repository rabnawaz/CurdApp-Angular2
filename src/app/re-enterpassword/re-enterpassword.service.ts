import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

@Injectable()
export class ReEnterpasswordService {

  constructor(private http: Http) { }


   resetData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://manukulaseva.org/angular2/api/updatePassword.php', body, {
      headers: headers
    })
      .map((data: Response) => data)
      .catch(this.handleError);
  }



   private handleError (error: any) {
    return Observable.throw(error);
  }

}