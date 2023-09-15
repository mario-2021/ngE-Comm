import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {

  username: any = 'MeroSH'

  constructor(private asd: AuthadminService, private route: Router){
    // this.username = localStorage.getItem('username')
    // this.username = asd.getUsername()
    // console.log(this.asd.loggedIn())

    // OR

    // if(!localStorage.getItem('token')){
    //   this.route.navigate(['/admin/login'])
    // }

    // OR

    // this.username = this.asd.getUsername()

    // if (this.asd.loggedIn() == true) {
    //   console.log("Connected")
    // } else {
    //   this.route.navigate(['admin/login'])
    // }

    // OR



  }

  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/admin/login'])
  }

}
