package com.example.studentmanagment.Dao;
import com.example.studentmanagment.Model.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginRepositoryFacadeImpl {
    
    @Autowired
    LoginRepositoryFacade loginRepository;

    public Login findUser(Login login) {
        Login login1 =null;
        if(loginRepository.findById(login.getUsername()).isPresent()){
           login1 = loginRepository.findById(login.getUsername()).get();
            if(login1.getPassword().equals(login.getPassword())){
                return login1;
            }else {
                return null;
            }
        }else{
            return null;
        }
    }

    public boolean registerUser(Login login) {
        loginRepository.save(login);
        return true;
    }
}
