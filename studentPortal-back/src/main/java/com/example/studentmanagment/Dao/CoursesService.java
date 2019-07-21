package com.example.studentmanagment.Dao;

import com.example.studentmanagment.Model.Courses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CoursesService {

    @Autowired
    CoursesRepository coursesRepository;

    public List<Courses> getCourses(){
        List<Courses> courses = new ArrayList<>();
        coursesRepository.findAll().forEach(courses::add);
        return courses;
    }

}
