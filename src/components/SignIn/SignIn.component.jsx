import React, { Component } from "react";

import { FormInput } from "../FormInput";
import { CustomButton } from "../CustomButton";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./SignIn.scss";
//import { auth } from "firebase";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = event => {
    // console.log("new value", event.target.value);
    // console.log("new target", event.target);
    const { value, name } = event.target;
    //black magic combined: destructuring x 2
    this.setState({ [name]: value });
  };
  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
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
          {/* <label>Email</label> */}
          <FormInput
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            label="password"
            required
          />
          {/* <input type="submit" value="submit form" /> */}
          <div className="buttons-bar">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} googleSignin>
              Sign In with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
