import { Component, OnInit } from '@angular/core';
import { SuperService } from '../super.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-suphead',
  templateUrl: './suphead.component.html',
  styleUrls: ['./suphead.component.css']
})
export class SupheadComponent implements OnInit {

  constructor(public _super: SuperService,private _router:Router) { }

  ngOnInit(): void {
  }
  logoutUser()
  {
  localStorage.removeItem('token')
  this._router.navigate(['/'])
  }
  loggedUser()
  {
    this._router.navigate(['/userdashboard'])
  }
  
}
