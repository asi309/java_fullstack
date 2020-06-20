package com.asidipta.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;
    
//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhc2lkaXB0YSIsImV4cCI6MTU5MzI4MjE2NiwiaWF0IjoxNTkyNjc3MzY2fQ.uLurjl0lKh__mesLye962b1xiFvyHqFbR2M1EG5_14EWDgQlebA9O-3odlojR1MmQy2LDu3RHHIUoDFP9C3qXw"
//    }

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

