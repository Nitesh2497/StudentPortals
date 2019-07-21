package com.example.studentmanagment.Controller;

import com.example.studentmanagment.Dao.CoursesService;
import com.example.studentmanagment.Model.Courses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class CourseController {

    @Autowired
    CoursesService coursesService;

    @RequestMapping("/courses")
    public List<Courses> getCourses(){
        return coursesService.getCourses();
    }
}
