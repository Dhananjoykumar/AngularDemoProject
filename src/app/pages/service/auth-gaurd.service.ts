import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from 'app/pages/service/authentication.service';

@Injectable()
export class AuthGaurdService implements CanActivate {

  constructor(private _authservice: AuthenticationService,  private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    if (localStorage.getItem('ud_key')){
      // if (sessionStorage.getItem('ud_key')){
      return true;
    }else {
    this.router.navigate(['/pages/login'], {queryParams: {returnUrl: state.url}});
    return false;
    }
  }



}
