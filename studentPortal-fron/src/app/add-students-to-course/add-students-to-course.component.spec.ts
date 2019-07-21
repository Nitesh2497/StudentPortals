import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentsToCourseComponent } from './add-students-to-course.component';

describe('AddStudentsToCourseComponent', () => {
  let component: AddStudentsToCourseComponent;
  let fixture: ComponentFixture<AddStudentsToCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentsToCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentsToCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
