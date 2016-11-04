import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {

  API_ENDPOINT :String;


constructor() {
    this.API_ENDPOINT = 'http://testwebapp.online/';
  }

}
