import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {JwtClientService} from "./services/jwt-client.service";
import {UserModel} from "./models/user";

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {
 userfounded:UserModel;
  constructor(private service:JwtClientService,private route:Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.service.user!==null){
      this.userfounded=this.service.user;
      if (!this.userfounded.roles.includes(route.data.role)){
        alert("vous n'avez pas le droit d'accés à ce composant");
        this.route.navigate(['']);
    }
    }
   return this.userfounded.roles.includes(route.data.role);



  }

}
