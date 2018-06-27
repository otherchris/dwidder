import React from 'react';
import { connect } from 'react-redux';
import authComponent from './hoc/authComponent';

const mapStateToProps = state => ({
  auth: state.auth,
  userName: state.session.userName,
});

const Dashboard = props => (
  <div className="dashboard-container">
    <div className="top">
      <span className="me name">{props.userName}</span>
      <span className="title">dwidder</span>
    </div>
  </div>
);

export default connect(mapStateToProps)(authComponent(Dashboard));
