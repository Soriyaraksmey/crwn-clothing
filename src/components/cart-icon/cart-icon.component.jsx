import React from "react";
import "./cart-icon.styles.scss";
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

const mapStateToProps = (state) => ({
  Itemcount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Carticon);
