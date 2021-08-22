import { Component, OnInit } from '@angular/core';
import { SuperService } from '../super.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-superlogin',
  templateUrl: './superlogin.component.html',
  styleUrls: ['./superlogin.component.css']
})
export class SuperloginComponent implements OnInit {
  user={
    uname:'',
    pass:''
  }
  constructor(private _super:SuperService,private _router:Router) { }
  
  ngOnInit(): void {
  }
  loginSuperAdmin(){
    this._super.loginsupadmin(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/superadmin'])
      },
      err => {
        console.log(err);
        alert("Invalid email or password")
        this._router.navigate(['/superadminlogin'])
      }
    ) 
  }
  
}
