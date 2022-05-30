package com.usersBingo.controller;

import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;

import com.usersBingo.model.UserModel;
import com.usersBingo.repository.UserRepository;
import com.usersBingo.util.Response;

public class UserCotroller {
	
	@Autowired
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
            if (Pattern.compile("(usuario.tipo_documento_and_documento_UNIQUE)").matcher(exc.getMessage()).find()) {
                response.message = "documento duplicado";
                return new ResponseEntity<Response>(response, HttpStatus.CONFLICT);
            } else {
                response.message = exc.getMessage();
                return new ResponseEntity<Response>(response, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }

}
