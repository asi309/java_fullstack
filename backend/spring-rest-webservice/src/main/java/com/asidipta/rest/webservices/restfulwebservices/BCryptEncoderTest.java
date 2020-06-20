package com.asidipta.rest.webservices.restfulwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BCryptEncoderTest {

	public static void main(String[] args) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		for(int i=0; i<5; i++) {			
			String encodedString = encoder.encode("xyz123");
			System.out.println(encodedString);
		}
	}

}
