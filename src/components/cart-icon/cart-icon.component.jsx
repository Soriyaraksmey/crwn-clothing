import React from "react";
import "./cart-icon.styles.scss";

import {createStructuredSelector} from "reselect";
import { ReactComponent as ShoppingIcon } from "../menu-item/asset/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import {selectCartItemsCount} from "../../redux/cart/cart.selector"

const Carticon = ({ toggleCartHidden, Itemcount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{Itemcount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector ({
  Itemcount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(Carticon);
