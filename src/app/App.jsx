import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { HomePage } from "../pages/homepage";
import { ShopPage } from "../pages/shop";
import { SignInAndSignUpPage } from "../pages/SignIn_and_SignUp";
import { Header } from "../components/Header";

import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

import "./App.scss";

export default class App extends Component {
  state = {
    currentUser: null
  };
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });
      //createUserProfileDocument(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          console.log(snapshot);
          console.log(snapshot.data());
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
          //console.log("dis", this.state);
        });
        // console.log(user);
      }
      this.setState({ currentUser: userAuth });
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
