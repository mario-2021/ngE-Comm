import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  dataStudent: any

  constructor(private ds: DataService, private router: Router) {
    this.ds.getAllStudents().subscribe(data => this.dataStudent = data)
  }

  details(id: any){
    this.router.navigate(['studentdetails/' + id])
  }

}
