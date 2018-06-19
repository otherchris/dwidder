import React from 'react';

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
    this.setState({ password: e.target.value })
    if (this.state.password == this.state.confirmPassword) {
      this.setState({passwordError: false})
    }
  }
  updateConfirmPassword(e) {
    this.setState({ confirmPassword: e.target.value })
    if (this.state.password == this.state.confirmPassword) {
      this.setState({passwordError: false})
    }
  }
  submit() {
    if (this.state.password == this.state.confirmPassword) {
      const request = new Request(
        'http://localhost:4000/api/users',
        {
          method: 'POST',
          body: JSON.stringify({ user: {email: this.state.email, password: this.state.password} }),
          headers: {
            'content-type': 'application/json',
          }
        },
      );
      fetch(request)
    }
    else {
      this.setState({passwordError: true});
    }
  }
  render() {
    return (
      <Component
        onSubmit={this.submit.bind(this)}
        updateEmail={this.updateEmail.bind(this)}
        updatePassword={this.updatePassword.bind(this)}
        updateConfirmPassword={this.updateConfirmPassword.bind(this)}
        email={this.state.email}
        password={this.state.password}
        confirmPassword={this.state.confirmPassword}
      />
    );
  }
}

export default signUpFormControl;
