import React, { Component } from 'react';
import './Counter.css';

class CounterButton extends Component{

    //Constructor -> define initial state
    // constructor(){
    //     super();
        // this.state = {
        //     counter : 0
        // }
        // this.increment = this.increment.bind(this)

    //     this.incrementByOne = this.incrementByOne.bind(this)
    //     this.decrementByOne = this.decrementByOne.bind(this)
    //     this.incrementByTen = this.incrementByTen.bind(this)
    //     this.decrementByTen = this.decrementByTen.bind(this)
    //     this.reset = this.reset.bind(this)
    // }

    render(){
        //const style = {fontSize: "100px"};
        return(
            <div className='counter'>
                <button onClick={() => this.props.updateMethod(this.props.by)}>{this.props.by}</button>
            </div>
        );
    }
    
    // increment(){
        // this.setState({
        //     counter: this.state.counter + this.props.by
        // });
        // this.props.updateMethod(this.props.by);
    // }
    // incrementByOne(){
    //     console.log('incrementing');
    //     //this.state.counter++; //Donot do this directly, use setState function
    //     this.setState({
    //         counter: this.state.counter + 1 //Pass object with the change as a JS object
    //         }
    //     );
    // }
    // incrementByTen(){
    //     this.setState({
    //         counter: this.state.counter + 10
    //     });
    // }
    // decrementByOne(){
    //     this.setState({
    //         counter: this.state.counter - 1
    //     });
    // }
    // decrementByTen(){
    //     this.setState({
    //         counter: this.state.counter - 10
    //     });
    // }
    // reset(){
    //     this.setState({
    //         counter: 0
    //     });
    // }
}

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter : 0
        };
        this.increment = this.increment.bind(this)
        this.reset = this.reset.bind(this)
    }
    
    render(){
        return(
            <div className="counter">
                <CounterButton by={1} updateMethod={this.increment}/>
                <CounterButton by={-1} updateMethod={this.increment}/>
                <CounterButton by={10} updateMethod={this.increment}/>
                <CounterButton by={-10} updateMethod={this.increment}/>
                <button onClick={this.reset}>Reset</button><br/>
                <span className="count">{this.state.counter}</span>
            </div>
        );
    }

    reset(){
        this.setState({
            counter: 0
        });
    }
    increment(by){
        this.setState(
            (prevState)=> {
                return {counter: prevState.counter + by}
            }
        );
    }
}


export default Counter;