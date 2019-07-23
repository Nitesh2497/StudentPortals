package com.example.studentmanagment;

import com.example.studentmanagment.Dao.LoginRepositoryFacadeImpl;
import com.example.studentmanagment.Dao.StudentService;
import com.example.studentmanagment.Model.Login;
import com.example.studentmanagment.Model.Studentdetails;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class StudentmanagmentApplicationTests {

    @Autowired
    LoginRepositoryFacadeImpl loginService;

    @Autowired
    StudentService studentService;

    @Test
    public void validateLoginCredentials(){
        Login login = new Login();
        login.setUsername("amank");
        login.setPassword("root");
        Login login1 = loginService.findUser(login);
        Assert.assertEquals("Aman",login1.getName());
    }

    @Test
    public void validateRegister(){
        Login login = new Login();
        login.setUsername("ank");
        login.setName("Ankith");
        login.setPassword("root");
        login.setEmail("ankith@oracle.com");
        login.setProfessor(false);
        login.setPhone("9790001478");
        Assert.assertTrue(loginService.registerUser(login));
    }

    @Test
    public void validateStudentNameById() {
        Studentdetails studentdetails = new Studentdetails();
        Assert.assertEquals("Nikhil",studentService.getStudentDetail("1").getName());
    }

    @Test
    public void validateAddStudent(){
        Studentdetails studentdetails = new Studentdetails();
        studentdetails.setId("8");
        studentdetails.setName("Sarthak");
        studentdetails.setAddress("Delhi");
        studentdetails.setBranch("CS");
        studentdetails.setCgpa("4");
        studentdetails.setCourseid(0);
        Assert.assertTrue(studentService.addStudent(studentdetails));
    }

    @Test
    public void validateAddStudentInCourse(){
        Assert.assertTrue(studentService.addStudentInCourse(1,"1"));
    }


}
