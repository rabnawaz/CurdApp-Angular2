import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import { ConstantService } from  '../../constant.service';

@Injectable()
export class ListDataService {

   constructor(private http: Http, public constantService: ConstantService) { }


  getOwnData() {
    const body={"userId": localStorage.getItem('tokens')};
    return this.http.post(this.constantService.API_ENDPOINT + 'getDataByUserId.php', body)
      .map((response: Response) => response.json());
  }

  deleteData(user: any) {
    const body = user;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.constantService.API_ENDPOINT + 'delete.php', body, {
      headers: headers
    })
      .map((data: Response) => data)
  }


}