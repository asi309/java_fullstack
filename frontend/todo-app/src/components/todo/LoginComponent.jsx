import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService';

class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: 'johndoe',
            password: 'example123',
            loginError: false,
            loginSuccess: false
        }
        this.handleFormChange = this.handleFormChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }
    handleFormChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    loginClicked(){
        //asidipta, xyz123
        if(this.state.username==="asidipta" && this.state.password==="xyz123"){
            this.props.history.push(`/welcome/${this.state.username}`);
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            //this.setState({loginSuccess: true});
            //this.setState({loginError: false});
            console.log("Successful");
        }else{
            this.setState({loginSuccess: false});
            this.setState({loginError: true});
            console.log("Failed");
        }
        //console.log(this.state);
    }
    render(){
        return(
            <div className="container">
            <div className="jumbotron">
                <h1>Login</h1>
                {this.state.loginError && <div className="alert alert-warning">Invalid Credentials</div>}
            {/*<ShowLoginStatus loginError={this.state.loginError} loginSuccess={this.state.loginSuccess}/>*/}
                User Name: <input type="text" name="username" placeholder={this.state.username} onChange={this.handleFormChange}/>
                Password: <input type="password" name="password" placeholder={this.state.password} onChange={this.handleFormChange}/>
                <button className="btn btn-outline-primary" onClick={this.loginClicked}>Login</button>
            </div>
            </div>
        );
    }
}


export default LoginComponent;