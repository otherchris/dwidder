import React from 'react';
import { connect } from 'react-redux';
import authComponent from './hoc/authComponent';

const mapStateToProps = state => ({
  auth: state.auth,
});

const Dashboard = () => (
  <div>dwidder</div>
);

export default connect(mapStateToProps)(authComponent(Dashboard));
