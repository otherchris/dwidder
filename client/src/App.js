import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import socketConnect from './hoc/socketConnect';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Dashboard from './Dashboard';
import logo from './logo.svg';
import './App.css';

const App = props => (
  <BrowserRouter>
    <div className="App">
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
    </div>
  </BrowserRouter>
);

App.propTypes = {
  data: PropTypes.shape({
    hello: PropTypes.string,
  }).isRequired,
};
export default socketConnect(App);
