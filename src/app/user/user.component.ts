import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SuperService } from '../super.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title:String="Users";
  userlist=[{
 
    name :'',
    email:''
    
    }]
  constructor(private router: Router,private _super: SuperService) { }

  ngOnInit(): void {
    this._super.getUsers().subscribe((data)=>{
      this.userlist=JSON.parse(JSON.stringify(data));
      console.log(this.userlist)
    });
  }
  admin(userlist:any)
    {
      localStorage.setItem("userid", userlist._id.toString());
      //  console.log(applicationlist._id);
      // const myData = localStorage.getItem("id");
      // console.log(myData);
      this.router.navigate(['/userform']);
    }

  }

