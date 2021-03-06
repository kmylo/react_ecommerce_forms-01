import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; //HOC
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./Header.scss";

const Header = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {/* <Link className="option" to="/signin">
          SIGN
        </Link> */}
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <div hidden={true} className="option" onClick={() => auth.signOut()}>
          SIGN OUT
          {/* for fake purpose */}
        </div>
      </div>
    </div>
  );
};

//state is the toplevel rootreducer
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

// connect HOC
export default connect(mapStateToProps)(Header);
