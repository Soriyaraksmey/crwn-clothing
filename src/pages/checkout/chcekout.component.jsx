import React from "react";
import {connect} from "react-redux";
import {selectCartItems , SelectcarTotal} from "../../redux/cart/cart.selector"
import {createStructuredSelector} from "reselect";
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import "./checkout.styles.scss";

const CheckOutpage = ({cartItems , total}) => {
    return ( <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Decription</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (<CheckoutItem cartItem={cartItem}/>))
        }
        <div className="total">
            <span>TOTAL :${total}</span>
        </div>
    </div> );
}
const mapStatetoProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: SelectcarTotal,
})
 
export default connect(mapStatetoProps)(CheckOutpage);