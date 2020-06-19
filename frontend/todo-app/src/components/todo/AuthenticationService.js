import axios from 'axios';

class AuthenticationService{

    basicAuthService(username, password){
        return axios.get("http://localhost:8080/basic-auth",
            {
                headers: {authorization: this.createBasicAuthHeader(username, password)}
            }
        )
    }

    createBasicAuthHeader(username, password){
        return("Basic " + window.btoa(username + ":" + password));
    }

    registerSuccessfulLogin(username,password){
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptor(this.createBasicAuthHeader(username, password));
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser');
        if(user===null){
            return false;
        }
        return true;
    }

    getLoggedInUser(){
        let user = sessionStorage.getItem('authenticatedUser');
        if(user===null){
            return '';
        }
        return user;
    }

    setupAxiosInterceptor(basicAuthHeader){
        axios.interceptors.request.use(
            config => {
                if(this.isUserLoggedIn()){
                    config.headers.authorization = basicAuthHeader
                }
                return config
            })
    }
}


export default new AuthenticationService(); //For helper classes we export an instance of the class