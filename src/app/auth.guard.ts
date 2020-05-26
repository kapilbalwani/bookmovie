import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private authService : AuthService,private router:Router){}
  canActivate(route:ActivatedRouteSnapshot,
              state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
                const isAuth=this.authService.getLoginStatus();
                console.log(isAuth);
                if(!isAuth){
                  this.router.navigate(['/login']);
                }
                return isAuth;
                

  }
  
}
