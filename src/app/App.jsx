import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { HomePage } from "../pages/homepage";
import { ShopPage } from "../pages/shop";
import { SignInAndSignUpPage } from "../pages/SignIn_and_SignUp";
import { Header } from "../components/Header";

import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}
