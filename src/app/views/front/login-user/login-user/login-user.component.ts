import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/services/authuser.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {

  dataToken: any

  constructor(private aus:AuthuserService, private route:Router){

  }

  login(f:any){
    let data = f.value
    this.aus.login(data).subscribe(data => {
        // console.log(data)
        this.dataToken = data
        this.aus.saveToken(this.dataToken.token)
        this.route.navigate(['/student'])
      }
    )
  }

}
