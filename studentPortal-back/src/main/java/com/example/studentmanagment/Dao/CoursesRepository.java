package com.example.studentmanagment.Dao;

import com.example.studentmanagment.Model.Courses;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoursesRepository extends JpaRepository<Courses,Integer> {
}
