package com.example.studentmanagment.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Courses {

    @Id
    private int courseid;
    private String name;

    public Courses() {
    }

    public Courses(int courseid, String name) {
        this.courseid = courseid;
        this.name = name;
    }

    public int getCourseid() {
        return courseid;
    }

    public void setCourseid(int courseid) {
        this.courseid = courseid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
