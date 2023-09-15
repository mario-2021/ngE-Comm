import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthadminService {

  profileAdmin = {
    username: '',
    role: ''
  }

  isLogin: boolean = false

  helper = new JwtHelperService()

  constructor(private http: HttpClient) {

  }

  login(data: any){
    return this.http.post('http://http://localhost:4200/admin/login', data)
  }

  saveData(token: any, username: any, role: any){
    // localStorage.setItem('token', token)
    // localStorage.setItem('role', role)
    // localStorage.setItem('username', username)
    // this.profileAdmin.username = username
    // this.profileAdmin.role = role
    // this.isLogin = true

    let decodeToken = this.helper.decodeToken(token)

    console.log(decodeToken)

    localStorage.setItem('token', token)
    localStorage.setItem('username', decodeToken.username)
    localStorage.setItem('role', role)

  }

  getUsername(){
    let token: any = localStorage.getItem('username')
    let decodeToken = this.helper.decodeToken(token)

      return decodeToken.username
  }

  loggedIn(){
    let token: any = localStorage.getItem('token')

    // let role = decodeToken.role

      if(!token){
        return false
      }

      let decodeToken = this.helper.decodeToken(token)

      if(decodeToken.role !== 'Admin'){
        return false
      }

      if(this.helper.isTokenExpired(token)){
        return false
      }

      return true

  }

}
