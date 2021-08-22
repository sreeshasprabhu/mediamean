import { Component, OnInit } from '@angular/core';
import {UseruploadModel} from './userupload';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-userupload',
  templateUrl: './userupload.component.html',
  styleUrls: ['./userupload.component.css']
})
export class UseruploadComponent implements OnInit {
  userupload= new UseruploadModel(null,null,null,null,null,null)
  constructor(private router: Router,private UserService:UserService) { }

  ngOnInit(): void {
  }
  Userupload()
  {    
        console.log(this.userupload);
        
        this.UserService.newUserVideo(this.userupload);        
        alert("Successfully Uploaded");
        this.router.navigate(['/userupload']);
      }
}

