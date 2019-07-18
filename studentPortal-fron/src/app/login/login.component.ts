import { Component, OnInit } from '@angular/core';
import {Login} from '../app.module';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  static login1: Login = {
    username: '',
    password: '',
    name: '',
    email: '',
    phone: '',
    professor: null
  };

  login: Login = {
    username: '',
    password: '',
    name: '',
    email: '',
    phone: '',
    professor: null
  };
  loggedIn = true;

  ngOnInit() {
  }

  sendFeedback(): void {
  const url = 'http://localhost:8080/login';
  this.http.post<Login>(url, this.login).subscribe(res => {
    if (res != null && res.professor) {
    console.log('Logged In as professor');
    this.loggedIn = true;
    this.router.navigate(['listStudents']);
    } else if (res != null && !res.professor) {
      console.log('Logged In as a Student');
      this.loggedIn = true;
      LoginComponent.login1 = res;
      this.router.navigate(['studentHomePage']);
    } else {
      this.loggedIn = false;
      console.log('Not Logged in');
    }
  }, err => {
    alert('Error');
  });
}

toggleVisible() {

}
}
