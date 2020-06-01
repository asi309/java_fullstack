import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import LoginComponent from './LoginComponent';
import HeaderComponent, {FooterComponent} from './PageComponents';
import ListTodosComponent from './ListTodosComponent';
import WelcomeComponent from './WelcomeComponent';
import LogoutComponent from './LogoutComponent';
import TodoComponent from './TodoComponent';

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
                        <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <Route path="" component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
                {/* <LoginComponent />
                <WelcomeComponent /> */}
            </div>
        );
    }
}

function ErrorComponent(){
    return(
        <div className="container">
            <div className="jumbotron">An Error Occured. Contact system admin</div>
        </div>
    );
}

/* function ShowLoginStatus(props){
    if(props.loginError){
        return <div>Invalid Credentials</div>;
    }else if(props.loginSuccess){
        return <div>Login Successful</div>;
    }
    return null;
}
 */

export default TodoApp;