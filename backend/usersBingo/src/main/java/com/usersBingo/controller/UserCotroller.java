package com.usersBingo.controller;

import java.util.regex.Pattern;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**Imporacion de librerias*/
import com.usersBingo.model.UserModel;
import com.usersBingo.repository.UserRepository;
import com.usersBingo.util.Response;

/**
 * @Description La clase UserCotroller contiene request que trae los datos de nodejs
 * @author LORENA FAJARDO
 * @version 1.0
 */

@Slf4j
@RestController
@CrossOrigin(origins ="http://localhost:8080", methods= {RequestMethod.GET,RequestMethod.POST})

public class UserCotroller {
	
	@Autowired(required=true)
	private UserRepository userRepository;
    private Response response = new Response();
	
    
	@PostMapping("/user")
    public ResponseEntity<Response> crear(UserModel user) {
        response.data = user;
        try {
            userRepository.save(user);
            return new ResponseEntity<Response>(response, HttpStatus.CREATED);
        } catch (Exception exc) {
            response.status = exc.getCause().toString();
            response.error = true;
            if (Pattern.compile("(user.email)").matcher(exc.getMessage()).find()) {
                response.message = "documento duplicado";
                return new ResponseEntity<Response>(response, HttpStatus.CONFLICT);
            } else {
                response.message = exc.getMessage();
                return new ResponseEntity<Response>(response, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }

}
