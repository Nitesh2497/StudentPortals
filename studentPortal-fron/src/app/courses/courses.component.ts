import { Component, OnInit } from '@angular/core';
import {Courses} from '../app.module';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  static courseid: number;
  courses: Courses[];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getCourses();
  }

  sendCourseId(courseId: number): any {
    CoursesComponent.courseid = courseId;
    console.log(courseId + ' is selected');
  }

  goToSelectedCourse(courseId: number): any {
    CoursesComponent.courseid = courseId;
    console.log(courseId + ' is selected');
    this.router.navigate(['courseDetails']);
  }

  public getCourses(): any {
    const url = 'http://localhost:8080/courses';
    this.http.get(url).subscribe((res: any[]) => {
      this.courses = res;
      console.log('Courses Returned');
    });
  }
}
