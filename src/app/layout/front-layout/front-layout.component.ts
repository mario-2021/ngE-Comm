import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/services/authuser.service';

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css']
})
export class FrontLayoutComponent {

  // verIfUser: boolean = false

  constructor(public au:AuthuserService, private router:Router) {

    // if(this.au.userLoggedIn() == true){
    //   this.verIfUser = true
    // }else{
    //   this.verIfUser = false
    // }

  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/loginUser'])
  }

}
