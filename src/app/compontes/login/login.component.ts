import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData: User = {
    email:'',
    password:''
  }
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser() {

    this.auth.loginUser(this.loginUserData)

      .subscribe(
        res => {
          console.log(res),
            localStorage.setItem('token', res.token),
            this.router.navigate(['/special'])
        },
        err => console.log(err)
      )
  }
}
