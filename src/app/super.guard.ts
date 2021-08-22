import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SuperService } from './super.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SuperGuard implements CanActivate {
  constructor(private _super:SuperService,private _router:Router){}
  canActivate():boolean{
    if(this._super.loggedIn()){
      return true
    }
    else{
       this._router.navigate(['superadminlogin'])   
       return false
    }
  }
}
