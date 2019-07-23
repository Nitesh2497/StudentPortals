import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  hamburger = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.router.navigate(['']);
  }

  hamburgerClick() {
    this.hamburger = !this.hamburger;
  }

  goToCourses() {
    this.router.navigate(['courses']);
  }

  goToAddStudent() {
    this.router.navigate(['addStudent']);
  }

  goToListStudents() {
    this.router.navigate(['listStudents']);
  }
}
