import React from 'react';
import { Redirect } from 'react-router-dom';

const authComponent = Component => (props) => (
  (props.data && props.data.auth) ? <Component {...props} /> :
    <Redirect to="/signup" />
);

export default authComponent;
