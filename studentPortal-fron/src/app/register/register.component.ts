import { Component, OnInit } from '@angular/core';
import {Login} from '../app.module';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  validName = true;
  validEmail = true;
  validContact = true;
  validUserName = true;
  validPassword = true;
  validConfirmPass = true;
  verification = false;
  availableUser = true;
  confirmPassword: string;

  registerUser: Login = {
    name: '',
    username: '',
    password: '',
    phone: '',
    email: '',
    professor:null
  };

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  logOut(): boolean {
    if (null != sessionStorage.getItem('userData')) {
      return false;
    } else {
      return true;
    }
  }

  register() {
    this.validName = this.validateName();
    this.validEmail = this.validateEmail();
    this.validContact = this.validateContact();
    this.validUserName = this.validateUsername();
    // this.validPassword = this.validatePassword();
    this.validConfirmPass = this.validateConfirmPassword();
    // this.availableUser = this.userNameAvailability();

    if (!this.validName || !this.validEmail || !this.validContact || !this.validUserName ||
      !this.validPassword || !this.validConfirmPass || !this.availableUser) {
      this.verification = false;
      return;
    } else {
      const url = 'http://172.31.40.41:8080/register';
      this.http.post<boolean>(url, this.registerUser).subscribe(
        res => {
          if (res) {
            this.verification = true;
            this.router.navigate(['']);
          } else {
            // this.availableUser = false;
            // document.documentElement.scrollTop = 0;
            return;
          }
        }
      );
    }
  }

  // userNameAvailability(): boolean {
  //   const url = 'http://172.31.40.41:8080/usernameAvailability';
  //   this.http.post<boolean>(url, this.registerUser).subscribe(
  //     res => {
  //       if (!res) {
  //         // document.documentElement.scrollTop = 0;
  //         return false;
  //       } else {
  //         return true;
  //       }
  //     }
  //   );
  //   return true;
  // }

  validateName(): boolean {
    if (!this.registerUser.name.match('^[a-zA-Z]+(\\s[a-zA-Z]+)*$')) {
      return false;
    } else {
      // this.validName = true;
      return true;
    }
  }

  validateEmail(): boolean {
    if (!this.registerUser.email.match('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')) {

      return false;
    } else {
      // this.validEmail = true;
      return true;
    }
  }

  validateContact(): boolean {
    if (!this.registerUser.phone.match('^[6-9]\\d{9}$')) {
      return false;
    } else {
      // this.validContact = true;
      return true;
    }
  }

  validateUsername(): boolean {
    return true;
  }

  validatePassword(): boolean {
    if (!this.registerUser.password.match('^((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20})$')) {
      return false;
    } else {
      // this.validPassword = true;
      return true;
    }
  }

  validateConfirmPassword(): boolean {
    if (!(this.registerUser.password === this.confirmPassword)) {

      return false;
    } else {
      // this.validConfirmPass = true;
      return true;
    }
  }
}
