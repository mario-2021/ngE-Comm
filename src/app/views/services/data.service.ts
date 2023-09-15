import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  token: any = localStorage.getItem('token')
  headerAdmin = new HttpHeaders()
  .set('authorization', this.token)
  .set('role', 'Admin')

  params = new HttpParams()
  .set('secret', 'MeroSH')
  .set('client', '23789')

  headerAll = new HttpHeaders()
  .set('authorization', this.token)

  constructor(private http: HttpClient) { }

  getAllStudents() {

    return this.http.get('https://jsonplaceholder.typicode.com/users')
    // , {headers: this.headerAll, params: this.params}

  }

  addStudents(
    // id: string,name: string,username: string,email: string,address: string
    profile: any
    ) {

    return this.http.post('http://localhost:4200/admin/students', profile)
    // , {headers: this.headerAdmin, params: this.params}

  }

  deleteStudent(id: any) {
    return this.http.delete('https://jsonplaceholder.typicode.com/users' + id)
    // , {headers: this.headerAdmin, params: this.params}
  }

  updateStudent(id: any, newProfile: any){
    return this.http.patch('https://jsonplaceholder.typicode.com/users' + id, newProfile)
    // , {headers: this.headerAdmin, params: this.params}
  }

  getOneStudent(num: any){
    // return this.http.get(`https://jsonplaceholder.typicode.com/posts/${num}`)
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${num}`)
    // return this.http.get(`https://jsonplaceholder.typicode.com/users/` + num)
  }

  getAllProducts() {
    return this.http.get('https://fakestoreapi.com/products')
  }

}

