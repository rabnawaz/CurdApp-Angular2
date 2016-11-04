import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import { ConstantService } from  '../constant.service';
 


@Injectable()
export class HomeService {

  constructor(private http: Http, public constantService: ConstantService) { }


   getOwnData() {
    const body= '';
    return this.http.post(this.constantService.API_ENDPOINT + 'list.php', body)
      .map((response: Response) => response.json());
  }

}