import React from 'react';
import { Redirect } from 'react-router-dom';
import { login, getPosts } from '../helpers';
import { addSession, addPosts } from '../actions';

const loginFormControl = Component => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.boundSubmit = this.submit.bind(this);
    this.boundUpdateEmail = this.updateEmail.bind(this);
    this.boundUpdatePassword = this.updatePassword.bind(this);
  }
  updateEmail(e) {
    this.setState({ email: e.target.value });
  }
  updatePassword(e) {
    this.setState({ password: e.target.value }, () => {
      if (this.state.password === this.state.confirmPassword) {
        this.setState({ passwordError: false });
      }
    });
  }
  submit() {
    login({
      user: {
        email: this.state.email,
        password: this.state.password,
      },
    }, (success, session) => {
      if (success) {
        getPosts((posts) => {
          this.props.dispatch(addPosts(posts));
          this.props.dispatch(addSession(session));
          this.setState({ success: true });
        });
      }
    });
  }
  render() {
    return (
      this.state.success ? <Redirect to="/dashboard" /> :
      <Component
        onSubmit={this.boundSubmit}
        updateEmail={this.boundUpdateEmail}
        updatePassword={this.boundUpdatePassword}
        email={this.state.email}
        password={this.state.password}
      />
    );
  }
};

export default loginFormControl;
