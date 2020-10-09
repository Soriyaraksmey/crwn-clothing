import React from "react";

import CustomeButton from "../custom-button/custome-button.component";
import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/cart/cart.selector"

import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";

const Cartdropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomeButton>Go to checkout</CustomeButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(Cartdropdown);
