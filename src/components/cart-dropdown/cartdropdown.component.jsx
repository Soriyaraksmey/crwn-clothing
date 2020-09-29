import React from "react";

import CustomeButton from "../custom-button/custome-button.component";

import "./cart-dropdown.styles.scss";

const Cartdropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomeButton>Go to checkout</CustomeButton>
    </div>
  );
};

export default Cartdropdown;
