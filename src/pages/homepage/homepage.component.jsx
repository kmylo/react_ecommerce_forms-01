import React, { Component } from "react";

import Directory from "../../components/Directory/Directory.component";
//import Directory from "../Directory/Directory.component";

import "./homepage.styles.scss";

const SECTIONS = [
  {
    title: "t-shirts"
  },
  {
    title: "boardshorts"
  },
  {
    title: "hats & beanies"
  },
  {
    title: "womens"
  },
  {
    title: "mens"
  }
];

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}

export default HomePage;
