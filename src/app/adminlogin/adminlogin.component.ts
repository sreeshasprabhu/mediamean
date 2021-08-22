import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private _auth:AuthService,private _router:Router) { }
  userItem= {
   
    email:'',
    password:''
  }
  ngOnInit(): void {
  }
  loginUser () {
    
    this._auth.loginAdmin(this.userItem)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/userdashboard'])
      },
      err => {
        console.log(err);
        alert("Invalid email or password")
        this._router.navigate(['/admin'])
      }
    ) 
  }

}
