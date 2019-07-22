import { Component, OnInit } from '@angular/core';
import {Studentdetails} from '../app.module';
import {CoursesComponent} from '../courses/courses.component';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  students: Studentdetails[];
  totalStudents: number;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.fetchStudentWithSpecificCourse();
  }

  public fetchStudentWithSpecificCourse(): any {
    const url = 'http://13.233.138.60:8080/courseDetails/' + CoursesComponent.courseid;
    this.http.get(url).subscribe((res: any[]) => {
      this.students = res;
      this.totalStudents = res.length;
      console.log('Got back details of students of specific course');
      // this.ngOnInit();
    });
  }

  addStudentToCourse() {
    this.router.navigate(['addStudentsToCourse']);
  }
}
