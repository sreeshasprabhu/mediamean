import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SuperService {

  constructor(private http:HttpClient) { }
  loginsupadmin(user){
    return this.http.post<any>("http://localhost:5000/superadmin",user)
  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
  getUsers(){
    return this.http.get("http://localhost:5000/users");
   
  }
  getUser(id:any){
    console.log(id)
    return this.http.get("http://localhost:5000/"+id);
  }
  newAdmin(item){
    console.log(item);
    return this.http.post("http://localhost:5000/superadmin/adminlist",{"admin":item})
    .subscribe((data)=>{
      console.log(data);
    })
  }
}
