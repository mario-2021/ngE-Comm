import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  messageErr = '';
  dataArray: any = '';


  constructor(private ds: DataService, private route: Router) {

  }

  add(f: any) {
    let data = f.value;
    // console.log(data);
    this.ds.addStudents(data).subscribe(data =>
      // console.log(data)
      {
        this.route.navigate(['/admin/students'])
      },(err: HttpErrorResponse) => {
        this.messageErr = err.error;
        // console.log(err.error);
        // console.log(err.status);
      })

  }

  delete(id:any, i: number){
    // this.ds.deleteStudent(id).subscribe(response => console.log(response))
    this.ds.deleteStudent(id).subscribe(
      this.dataArray.splice(i,1)
      )
  }

}
