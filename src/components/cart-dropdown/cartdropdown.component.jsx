import React from "react";
import {createStructuredSelector} from "reselect";
import CustomeButton from "../custom-button/custome-button.component";
import CartItem from "../cart-item/cart-item.component";
import {selectCartHidden, selectCartItems} from "../../redux/cart/cart.selector"


import {withRouter} from "react-router-dom"
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const Cartdropdown = ({ cartItems,history,dispatch}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
         cartItems.length ?( cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
        )
        :
        (<span className="empty-message">your cart is empty</span>)
        
      }
      </div>
      <CustomeButton onClick={()=> {history.push("/checkout"); 
    dispatch(toggleCartHidden());
    }}>Go to checkout</CustomeButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cartdropdown));
