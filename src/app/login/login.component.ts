import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  isAdmin: boolean = false;
  isUser: boolean = false;
  constructor(private auth:AuthService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.email == 'admin' && this.password == 'admin') {
      this.isAdmin = true;
      this.isUser = false;
      this.route.navigate(['/admin']);
      this.auth.logIn();
    }
    else if(this.email == 'user' && this.password == 'user') {
      this.isAdmin = false;
      this.isUser = true;
      this.route.navigate(['/user']);
      this.auth.logIn();
    }
    else {
      this.isAdmin = false;
      this.isUser = false;
      this.auth.logOut();
    }
    console.log(this.email + ' ' + this.password);
    console.log(this.isAdmin + ' / ' + this.isUser);
  }
}
