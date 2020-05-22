import React, { Component } from "react";
import { MenuItem } from "../MenuItem";
import { DIRECTORY_DATA } from "./Directory.data";

import "./Directory.styles.scss";

class Directory extends Component {
  state = {
    sections: DIRECTORY_DATA
  };
  render() {
    const { sections } = this.state;
    // console.log("sectin", sections);
    return (
      <div className="directory-menu">
        {sections.map((section, i) => (
          <MenuItem key={i} {...section} />
        ))}
      </div>
    );
  }
}
export default Directory;
