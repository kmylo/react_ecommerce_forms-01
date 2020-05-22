import React from "react";
//withRouter highorder component HOC
import { withRouter } from "react-router-dom";

import "./MenuItem.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkTo, match }) => {
  // console.log("dada", linkTo);
  return (
    <div
      className={`${size} menu-item`}
      // onClick2={() => history.push(`${match.url}${linkTo}`)}
      onClick={() => history.push(linkTo)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
