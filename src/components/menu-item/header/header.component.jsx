import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { ReactComponent as Logo } from "../asset/crown.svg";
import "./header.styles.scss";

import { auth } from "../../firebse-util/firebase.utils";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sing out
          </div>
        ) : (
          <Link className="option" to="singin">
            Sing in
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
