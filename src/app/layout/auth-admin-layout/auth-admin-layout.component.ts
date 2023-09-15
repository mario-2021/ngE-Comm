import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['./auth-admin-layout.component.css']
})
export class AuthAdminLayoutComponent implements OnInit {

  dataReceived: any
  url: any
  messageAuthError: any

  constructor(private ads: AuthadminService, private route: Router,
    private arouter: ActivatedRoute){

    // console.log(this.ads.isLogin)

    if(this.ads.loggedIn() == true) {
      this.route.navigate(['/admin'])
    }

  }

  ngOnInit(): void {
      this.url = this.arouter.snapshot.queryParams['returnUrl'] || '/admin/'
      // console.log(this.url);
  }

  loginadmin(f: any){

    let data = f.value

    this.ads.login(data).subscribe(
      // response => console.log(response),
      (response) =>{

        this.dataReceived = response
        this.ads.saveData(this.dataReceived.token, this.dataReceived.username,
          this.dataReceived.role)
          // console.log(response)
          // console.log(this.dataReceived)
          // console.log(this.ads.profileAdmin.username)
          // console.log(this.ads.profileAdmin.role)
          this.route.navigate([this.url])

      },
      err => this.messageAuthError = "Invalid Email or Password"
    )

  }

}
