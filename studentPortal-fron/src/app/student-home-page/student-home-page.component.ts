import { Component, OnInit } from '@angular/core';
import {Login} from '../app.module';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-student-home-page',
  templateUrl: './student-home-page.component.html',
  styleUrls: ['./student-home-page.component.css']
})
export class StudentHomePageComponent implements OnInit {

  constructor() { }


  // login: Login = {
  //   username: '',
  //   password: '',
  //   name: '',
  //   email: '',
  //   phone: '',
  //   professor: null
  // };

  student = LoginComponent.login1;

  ngOnInit() {
  }

}
