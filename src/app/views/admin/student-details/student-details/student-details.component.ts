import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  id:any = ''
  dataObject: any
  messageError = ''


  constructor(private route: ActivatedRoute, private ds: DataService){

    this.route.params.subscribe(
        // data => console.log(data),
        params => this.id = params['id']
      )

      this.ds.getOneStudent(this.id).subscribe(
        // response => console.log(response),
        response => this.dataObject = response,
        (err: HttpErrorResponse) =>
        // this.messageError = err.message
        this.messageError = 'Not Fount'
      )

  }

}
