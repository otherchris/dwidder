import React from 'react';
import { Redirect } from 'react-router-dom';

const authComponent = Component => props => (
  props.auth ? <Component {...props} /> :
  <Redirect to="/signup" />
);

export default authComponent;
