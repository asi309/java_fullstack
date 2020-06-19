package com.asidipta.rest.webservices.restfulwebservices.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BasicAuthController {
	
	//GET Method with URI --> /hello-world
	@GetMapping(path="/basic-auth")
	public String basicAuth() {
		return "You are authorized";
	}
	
}
