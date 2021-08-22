import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private _router: Router) { }
  
  newUser(item){
    return this.http.post("http://localhost:5000/signup",{"user":item})
    .subscribe(data=>{
      console.log(data);
      alert("Successfully Registered");
      this._router.navigate(['/login']);
      
    },err=>{
      alert("EmailId already exists");
        this._router.navigate(['/signup']);
    }
    )
  }
  newUserVideo(item){ 
    
    // formData.append('text', item.get('video').value);
    // formData.append('file', item.get('video').value);

  // const formData = new FormData();
  //     formData.append('file', item.value);
  //     formData.append('file', item.value);
  //     formData.append('text', item.value);
  //     formData.append('text', item.value);
      return this.http.post("http://localhost:5000/uservideo",{"uservideo":item})
      .subscribe(data=>{
        console.log(data);
      })
    
      // return this.http.post("http://localhost:5000/uservideo",formData )
      // .subscribe(data=>{
      //   console.log(data);
      // })
    }
    
}
