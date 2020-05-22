import React from "react";

import "./CustomButton.scss";

const CustomButton = ({ children, inverted, googleSignin, ...props }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      googleSignin ? "google-signin" : "custom-button"
    }`}
    {...props}
  >
    {children}
  </button>
);

export default CustomButton;
