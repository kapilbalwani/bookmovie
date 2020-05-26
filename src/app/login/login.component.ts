import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import cred from '../../assets/Registrations.json'
//import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private authService : AuthService, private router:Router,private r:ActivatedRoute ) {
    //console.log(this.authService);
   }
  loggedIn=false;
  message="";
  private authStatusSub: Subscription;
  check:boolean;
  ngOnInit() {
    //console.log("Login");
    this.authStatusSub= this.authService.getHeaderStatus()
      .subscribe((loginData=>{
        
        this.loggedIn=loginData.loginFlag;
      }))

      //console.log(this.authStatusSub);

  }

  onSubmit(form: NgForm){
    // console.log(form.controls.username.value)
    // console.log(form.controls.password.value)
    this.loggedIn=true;
    this.authService.onLogin(form.controls.username.value,form.controls.password.value);
    if(this.loggedIn){
      this.router.navigate(["../movies"],{relativeTo :this.r});
    }
    else{
      this.message="User is unauthorized";
    }
    
    //console.log("check:"+this.check);
    // if(this.check){
    //   console.log("check:"+this.check);
    //   this.router.navigate(["../movies"],{relativeTo :this.r});
    // }
    //console.log(this.authService);
  }
}
