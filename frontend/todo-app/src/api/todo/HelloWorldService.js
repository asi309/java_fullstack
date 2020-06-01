import axios from 'axios';

class HelloWorldService{
    executeHelloWorldService(name){
        return axios.get(`http://localhost:8080/hello-world-bean/path-var/${name}`);
        //console.log('Service Executed');
    }
}

export default new HelloWorldService();