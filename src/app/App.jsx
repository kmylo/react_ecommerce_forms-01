import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { HomePage } from "../pages/homepage";
import { ShopPage } from "../pages/shop";
import { SignInAndSignUpPage } from "../pages/SignIn_and_SignUp";
import { Header } from "../components/Header";

import { auth } from "../firebase/firebase.utils";

import "./App.scss";

export default class App extends Component {
  state = {
    currentUser: null
  };
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}
