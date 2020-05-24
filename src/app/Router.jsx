import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../components/header/header.component";
//import NavBar from "../components/navbar/navbar.component";

import HomePage from "../pages/homepage/homepage.component";
import ShopPage from "../pages/shop/shop.component";
import ContactPage from "../pages/contact/contact.component";
// import ProductListPage from "../pages/product-list/product-list.component";

// import PostPage from "../pages/post-form/postPage.component";

// import CheckoutPage from "../pages/checkout/checkout.component";
// import ErrorPage from "../pages/error/error.component";

class Router extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <NavBar /> */}

        <Header />
        <Switch>
          <Route exact path="/app/home" component={HomePage} />
          <Route exact path="/" render={() => <Redirect to="/app/home" />} />
          <Route exact path="/app" render={() => <Redirect to="/app/home" />} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/contact" component={ContactPage} />
          {/* <Route exact path="/products" component={ProductListPage} />
          <Route exact path="/post-page" component={PostPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route component={ErrorPage} /> */}
        </Switch>
      </React.Fragment>
    );
  }
}

export default Router;
