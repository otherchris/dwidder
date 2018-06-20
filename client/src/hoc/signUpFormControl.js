import React from 'react';
import { signUp } from '../helpers';
import { Redirect } from 'react-router-dom';

const signUpFormControl = Component => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }
  updateEmail(e) {
    this.setState({ email: e.target.value })
  }
  updatePassword(e) {
    this.setState({ password: e.target.value }, () => {
      if (this.state.password == this.state.confirmPassword) {
        this.setState({passwordError: false})
      }
    });
  }
  updateConfirmPassword(e) {
    this.setState({ confirmPassword: e.target.value }, () => {
      if (this.state.password == this.state.confirmPassword) {
        this.setState({passwordError: false})
      }
    });
  }
  submit() {
    if (this.state.password == this.state.confirmPassword) {
      signUp({ user: { email: this.state.email, password: this.state.password } }, (success) => {
        if (success) {
          this.setState({ success: true })
        }
      })
    }
    else {
      this.setState({passwordError: true});
    }
  }
  render() {
    return (
      this.state.success ? <Redirect to='/login' /> :
      <Component
        onSubmit={this.submit.bind(this)}
        updateEmail={this.updateEmail.bind(this)}
        updatePassword={this.updatePassword.bind(this)}
        updateConfirmPassword={this.updateConfirmPassword.bind(this)}
        email={this.state.email}
        password={this.state.password}
        confirmPassword={this.state.confirmPassword}
        passwordError={this.state.passwordError}
      />
    );
  }
}

export default signUpFormControl;
