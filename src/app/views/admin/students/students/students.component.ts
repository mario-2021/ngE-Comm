import { DataService } from './../../../services/data.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  dataArray: any

  dataStudent = {
    id: '',
    name: '',
    username: '',
    email: '',
    address: ''
  }

  messageSuccess = '';

  // constructor(private http: HttpClient) {

  //   this.http.get('https://jsonplaceholder.typicode.com/users')
  //     .subscribe(data => console.log(data))
  // }

  constructor (private ds: DataService, private route: Router) {

    // this.ds.getAllStudents().subscribe( data => console.log(data) )

    this.ds.getAllStudents().subscribe(data => this.dataArray = data)

  }

  delete(id:any, i: number){
    // this.ds.deleteStudent(id).subscribe(response => console.log(response))
    this.ds.deleteStudent(id).subscribe(
      this.dataArray.splice(i,1)
      )
  }

  getData(id: any, name: any, username: any, email: any, address: any){

    this.messageSuccess = '';
    this.dataStudent.id = id;
    this.dataStudent.name = name;
    this.dataStudent.username = username;
    this.dataStudent.email = email;
    this.dataStudent.address = address;

    console.log(this.dataStudent);


  }

  updateNewStudent(f: any){
    let data = f.value
    this.ds.updateStudent(this.dataStudent.id, data).subscribe(response =>
      {
        // console.log(response)
        let indexId = this.dataArray.findIndex((obj: any) =>
        obj.id == this.dataStudent.id)
        // console.log(this.dataArray[indexId]);
        this.dataArray[indexId].id = data.id;
        this.dataArray[indexId].name = data.name;
        this.dataArray[indexId].username = data.username;
        this.dataArray[indexId].email = data.email;
        this.dataArray[indexId].address = data.address;

        this.messageSuccess = `this Student ${this.dataArray[indexId].id} is updated`

      },
      (err: HttpErrorResponse) => {
        console.log(err.message)
      }
    )
  }

  details(id: any){
    this.route.navigate(['/admin/studentDetails/' + id])
  }

}
