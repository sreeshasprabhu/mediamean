import { Component, OnInit } from '@angular/core';
import {SignupModel} from './signupmodel';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userItem= new SignupModel(null,null,null)
  constructor(private router: Router,private UserService:UserService) { }
  
  ngOnInit(): void {
  }
  AddUser()
  {    
    
        this.UserService.newUser(this.userItem);
    //     console.log("Called");    
    // alert("Successfully Registered");
    // this.router.navigate(['/login']);
      }
    
    
  }
  

