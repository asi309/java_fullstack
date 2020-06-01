import React from 'react';
import { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';

function App() {
  return (
    //<LearningComponents />
    // <LearnReact />
    <div className='App'>
      {/*<Counter />*/}
      <TodoApp />
    </div>
  );
}

function LearningComponents(){
  return(
    <div className="App">
      My First App
      <FirstComponent />
      <SecondComponent />
    </div>
  );
}

function LearnReact(){
  return(
    <div className="LearnReact">
      <header className="LearnReact-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
