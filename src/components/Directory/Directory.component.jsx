import React, { Component } from "react";
import MenuItem from "../Menu-item/Menu-item.component";
import "./Directory.styles.scss";

class Directory extends Component {
  state = {
    sections: [
      {
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        linkTo: "/shop",
        size: "small",
        id: 1
      },
      {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        linkTo: "/shop",
        size: "small",
        id: 2
      },
      {
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        linkTo: "/shop",
        size: "small",
        id: 3
      },
      {
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        linkTo: "/shop",
        size: "big",
        id: 4
      },
      {
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        linkTo: "/shop",
        size: "big",
        id: 5
      }
    ]
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
