import React from "react";

import { SignIn } from "../../components/Sign_in";

import "./SignIn_and_SignUp.scss";

const SignInAndSignUpPage = () => {
  // console.log("dada", linkTo);
  return (
    <div className="sign-in">
      <SignIn className="sign-in-wrapp" />
    </div>
  );
};

export default SignInAndSignUpPage;
