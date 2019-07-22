import { Component, OnInit } from '@angular/core';
import {Studentdetails} from '../app.module';
import {CoursesComponent} from '../courses/courses.component';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-students-to-course',
  templateUrl: './add-students-to-course.component.html',
  styleUrls: ['./add-students-to-course.component.css']
})
export class AddStudentsToCourseComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  students: Studentdetails[];

  ngOnInit() {
    this.fetchStudentsNotInCourse();
  }

  public fetchStudentsNotInCourse(): any {
    const url = 'http://13.233.138.60:8080/addStudentsToCourse/' + CoursesComponent.courseid;
    this.http.get(url).subscribe((res: any[]) => {
      this.students = res;
    });
}

  addStudentToCourse(id: string) {
    const url = 'http://13.233.138.60:8080/addStudentsToCourse/' + CoursesComponent.courseid + '/' + id;
    this.http.get(url).subscribe(res => {
      if (res) {
        console.log('Student Added To Course');
        this.router.navigate(['addStudentsToCourse']);
      } else {
        console.log('Student Not Added to Course');
      }
    });
  }
}
