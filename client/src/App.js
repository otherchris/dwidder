import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import socketConnect from './hoc/socketConnect';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Dashboard from './Dashboard';
import './App.css';

export const App = () => (
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={() => (<Redirect to="/dashboard" />)} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
    </div>
  </BrowserRouter>
);

export default socketConnect(App);
