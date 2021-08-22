import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  loginUser(user){
    return this.http.post<any>("http://localhost:5000/signin",user)
  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
  loginAdmin(user){
    return this.http.post<any>("http://localhost:5000/admin",user)
  }
  
}

