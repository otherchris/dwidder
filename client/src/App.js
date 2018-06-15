import React, { Component } from 'react';
import socketConnect from './hoc/socketConnect';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="hello-world">
          hello {this.props.data.hello}
        </div>
      </div>
    );
  }
}

export default socketConnect(App);
