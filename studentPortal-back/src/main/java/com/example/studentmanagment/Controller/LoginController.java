package com.example.studentmanagment.Controller;

import com.example.studentmanagment.Dao.LoginRepositoryFacadeImpl;
import com.example.studentmanagment.Dao.StudentService;
import com.example.studentmanagment.Model.Login;
//import com.example.studentmanagment.Services.StudentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class LoginController {

    @Autowired
    LoginRepositoryFacadeImpl loginService;

    @PostMapping("/login")
    public Login userLogin(@RequestBody Login login){
        Login login1 = null;
        login1 = loginService.findUser(login);
        return login1;
    }

    @PostMapping("/register")
    public boolean registerUser(@RequestBody Login login){
        return loginService.registerUser(login);
    }

}
