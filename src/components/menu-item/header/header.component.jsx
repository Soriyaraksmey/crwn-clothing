import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { ReactComponent as Logo } from "../asset/crown.svg";
import "./header.styles.scss";
import {createStructuredSelector} from 'reselect';


import { auth } from "../../firebse-util/firebase.utils";
import Carticon from "../../cart-icon/cart-icon.component";
import Cartdropdown from "../../cart-dropdown/cartdropdown.component";
import {selectCartHidden} from "../../../redux/cart/cart.selector";
import {selectCurrentUser} from "../../../redux/user/user.selectors";

const Header = ({ currentUser, hidden }) => {
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
        <Carticon />
      </div>
      {hidden ? null : <Cartdropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
