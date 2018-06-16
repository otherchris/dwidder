import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';
import socketConnect from './hoc/socketConnect';
import LoginForm from './LoginForm';
import logo from './logo.svg';
import './App.css';

const App = props => (
  <BrowserRouter>
    <div className="App">
      <LoginForm />
      <Link to="/signup">Sign up</Link>
    </div>
  </BrowserRouter>
);

App.propTypes = {
  data: PropTypes.shape({
    hello: PropTypes.string,
  }).isRequired,
};
export default socketConnect(App);
