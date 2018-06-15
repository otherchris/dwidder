import React from 'react';
import socketConnect from './hoc/socketConnect';
import logo from './logo.svg';
import './App.css';

const App = props => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <div className="hello-world">
        hello {props.data.hello}
    </div>
  </div>
);


export default socketConnect(App);
