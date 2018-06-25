import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>Hello</p>
          <ToDoList/>
      </div>
    );
  }
}

export default App;
