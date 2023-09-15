import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthuserService {

  helper = new JwtHelperService()

  constructor(private http: HttpClient) { }

  register(body: any) {
    return this.http.post('http://localhost:4200/register', body)
    // localStorage.setItem('email', body),
    // localStorage.setItem('password', body)
  }

  login(body: any) {
    return this.http.post('http://localhost:4200/login', body)
  }

  saveToken(token: any){
    localStorage.setItem('token', token)
  }

  userLoggedIn(){

    if(!localStorage.getItem('token')){
      return false
    }

    let token: any = localStorage.getItem('token') || null

    let decodeToken = this.helper.decodeToken(token)

    if(decodeToken.role){
      return false
    }

    if(this.helper.isTokenExpired(token)){
      return false
    }

    return true

  }

}