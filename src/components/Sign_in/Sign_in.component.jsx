import React, { Component } from "react";

import { FormInput } from "../FormInput";

import "./Sign_in.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in-container">
        <h2>I already have an account</h2>
        <span>Sign in with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <label>Email</label>
          <FormInput
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            label="password"
            required
          />
          <input type="submit" value="submit form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
