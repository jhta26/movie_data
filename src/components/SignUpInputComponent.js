import React, { Component } from "react";

class SignUpInputComponent extends React.Component {
  state = {
    username: "",
    password: "",
    usaState: "",
    country: "",
    gender: "",
    birthday: ""
  };

  _handleChangeUsername = event => {
    event.preventDefault();
    let username = event.target.value;
    this.setState({ username: username });
  };
  _handleChangePassword = event => {
    event.preventDefault();
    let password = event.target.value;
    this.setState({ password: password });
  };
  _handleClick = event => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value.trim();
    const password = form.password.value.trim();
    const usaState = form.usaState.value.trim();
    const country = form.country.value.trim();
    const gender = form.gender.value.trim();
    const birthday = form.birthday.value.trim();
    if (username.length == 0 && password.length == 0 && userState.length == 0) {
      this.setState({
        showErrorMess: true
      });
    } else {
      onSubmitSignup({
        username,
        password,
        usaState,
        country,
        gender,
        birthday
      });
    }
  };
  render() {
    return (
      <div className="row container center-aligned">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Username"
                id="username"
                type="text"
                name="username"
                className="validate"
                onChange={this._handleChangeUsername}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="password"
                type="password"
                name="password"
                className="validate"
                placeholder="Password"
                onChange={this._handleChangePassword}
              />
            </div>
          </div>
          <div className="row">
            <a
              className="waves-effect waves-light btn"
              onClick={this._handleClick}
            >
              Submit
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpInputComponent;
