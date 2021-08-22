import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth:AuthService,private _router:Router) { }
  logoutUser()
  {
  localStorage.removeItem('token')
  this._router.navigate(['/'])
  }
  loggedUser()
  {
    this._router.navigate(['/userdashboard'])
  }
  ngOnInit(): void {
  }

}
