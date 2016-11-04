import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import { ConstantService } from  '../constant.service';

@Injectable()
export class ForgetPasswordService {

   constructor(private http: Http, public constantService: ConstantService) { }


   forgetData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.constantService.API_ENDPOINT + 'sendEmail.php', body, {
      headers: headers
    })
      .map((data: Response) => data)
      .catch(this.handleError);
  }



   private handleError (error: any) {
    console.log(error);
    return Observable.throw(error);
  }

}
