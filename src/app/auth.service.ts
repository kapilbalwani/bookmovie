import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import cred from '../assets/Registrations.json'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  a="test";
  loggedInS=false;
  selectedCity="Bangalore";
  constructor() {
    //console.log("New authservice created");
   }

  private loggedInUpdate= new Subject<boolean>();
  private headerUpdate= new Subject<{user:String,loginFlag:boolean}>();

  onLogin(u,p){
    this.a="initial";
    if(u==cred[0].username && p==cred[0].password){
      //console.log("Login Success");
      this.loggedInS=true;
      this.loggedInUpdate.next(true);
      this.updateHeader(u,this.loggedInS);
      //return true;
    }
    else{
      //console.log("User not authorized");
      this.loggedInS=false;
      this.loggedInUpdate.next(false);
      this.updateHeader(u,this.loggedInS);
      //return false;
    }
  }

  getAuthStatus(){
    //console.log("returning status");
    //console.log(this.loggedInUpdate.next(this.loggedInS));
    return this.loggedInUpdate;
    //return this.loggedInUpdate.asObservable();
  }

  getLoginStatus(){
    return this.loggedInS;
  }

  updateHeader(user:String,loginFlag:boolean){
    this.headerUpdate.next({user,loginFlag});
  }

  getHeaderStatus(){
    //console.log("returning status");
    //console.log(this.loggedInUpdate.next(this.loggedInS));
    return this.headerUpdate.asObservable();
    //return this.loggedInUpdate.asObservable();
  }

  changeCity(c){
    //console.log("changing city"+c)
    this.selectedCity=c;
  }

  getSelectedCity(){
    return this.selectedCity;
  }


}
