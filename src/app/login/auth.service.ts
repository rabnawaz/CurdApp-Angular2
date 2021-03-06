import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { LoginService } from "./login.service";

@Injectable()
export class AuthService implements CanActivate {

   constructor(private loginService: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const roles = route.data["roles"];
    return (roles == localStorage.getItem('usertype') && this.loginService.isAuthenticated());

  }
}
