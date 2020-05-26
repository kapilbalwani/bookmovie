import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: String;
  loggedOut=true;
  private authStatusSub: Subscription;
  constructor(private authService: AuthService , private router:Router, private r:ActivatedRoute) {
    //console.log(this.authService);
   }

  
  ngOnInit() {
    //this.authService.onLogin("kapil","kapil");
    //console.log("Header");
    this.authStatusSub= this.authService.getHeaderStatus()
      .subscribe((loginData=>{
        //console.log("loginData from Header")
        //console.log(loginData)
        this.user=loginData.user;
        this.loggedOut=!loginData.loginFlag;
      }))
      
    //console.log(this.authStatusSub);
    //console.log(this.authService.getLoginStatus());
  }
  
  onLogout(){
    this.loggedOut=true;
    this.router.navigate(['../login'],{relativeTo:this.r});
  }

  onChange(e){
    this.authService.changeCity(e);
    console.log(e);
  }
}
