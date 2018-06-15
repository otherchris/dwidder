import React from 'react';
import PropTypes from 'prop-types';
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

App.propTypes = {
  data: PropTypes.shape({
    hello: PropTypes.string,
  }).isRequired,
};
export default socketConnect(App);
