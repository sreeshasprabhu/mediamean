import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SuperService } from '../super.service';
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  constructor(private router: Router,private _super:SuperService) { }
  userItem={
    name:'',
    email:''
  }
  ngOnInit(): void {
    let userId = localStorage.getItem("userid");
    console.log(userId);
    this._super.getUser(userId).subscribe((data)=>{
      this.userItem=JSON.parse(JSON.stringify(data));
  })
  }
  makeadmin()
  {   
    this._super.newAdmin(this.userItem);
    // console.log("Called"); 
    console.log(this.userItem)   
    alert("Approved Successfully");
    this.router.navigate(['/adminuser']);
  }
  

}
