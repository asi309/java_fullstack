import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService';

class WelcomeComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            welcomeMessage: ''
        }
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    render(){
        return(
            <>
            <div className="container">
                <button className="btn btn-primary" onClick={this.retrieveWelcomeMessage}>Get Welcome Message</button>
            </div>
            <div className="container">
                {this.state.welcomeMessage}
            </div>
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h3>Welcome {this.props.match.params.name}</h3>
                <p>You can manage your todos <Link to="/todos">here.</Link></p>
            </div>
            </div>
            </>
        );
    }

    retrieveWelcomeMessage(){
        HelloWorldService.executeHelloWorldService(this.props.match.params.name)
        .then(response => this.setState({welcomeMessage: response.data.message}))
        .catch(error => this.setState({welcomeMessage: this.handleError(error)}));
    }

    handleError(error){
        let errorMessage = '';
        if(error.response && error.response.data){
            errorMessage += error.response.data.message;
        }
        if(errorMessage.length!==0){
            return errorMessage;
        }
    }
}

export default WelcomeComponent;