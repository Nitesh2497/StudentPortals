package com.example.studentmanagment.Dao;

import com.example.studentmanagment.Model.Studentdetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {

    @Autowired
    StudentRepository studentRepository;

    public List<Studentdetails> getStudentDetails() {
        List<Studentdetails> studentdetailsList = new ArrayList<>();
        studentRepository.findAll().forEach(studentdetailsList::add);
        return studentdetailsList;
    }

    public Studentdetails getStudentDetail(String id) {
        return studentRepository.findById(id).get();
    }

    public boolean addStudent(Studentdetails studentDetails) {
//        !studentDetails.getAddress().isEmpty()
        studentRepository.save(studentDetails);
        return true;
    }

    public boolean deleteStudent(String studentId) {
        studentRepository.deleteById(studentId);
        return true;
    }

    public List<Studentdetails> getStudentsInCourse(Integer courseId){
        List<Studentdetails> studentdetails = new ArrayList<>();
//        studentRepository.findAll().forEach(studentdetails::add);
        for(Studentdetails student: studentRepository.findAll()){
            if(student.getCourseid()==courseId){
                studentdetails.add(student);
            }
        }
        return studentdetails;
    }

    public List<Studentdetails> getStudentsNotInCourse(Integer courseId){
        List<Studentdetails> studentdetails = new ArrayList<>();
        for(Studentdetails student: studentRepository.findAll()){
            if(student.getCourseid()!=courseId){
                studentdetails.add(student);
            }
        }
        return studentdetails;
    }

    public Boolean addStudentInCourse(Integer courseId,String studentId){
        Studentdetails studentdetails = studentRepository.findById(studentId).get();
        studentdetails.setCourseid(courseId);
        studentRepository.save(studentdetails);
        return true;
    }
}
