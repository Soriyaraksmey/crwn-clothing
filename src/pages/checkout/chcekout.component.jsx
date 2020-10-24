import React from "react";
import {connect} from "react-redux";
import {selectCartItems , SelectcarTotal} from "../../redux/cart/cart.selector"
import {createStructuredSelector} from "reselect";
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
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
            cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>))
        }
        <div className="total">
            <span>TOTAL :${total}</span>
        </div>
        <div className="card-message">
            <p>Pleas use this following card for payment <br/>
             4242424242424242 EXP:12/22 CVV: 123
            </p>
        </div>
        <StripeCheckoutButton price={total}/>

    </div> );
}
const mapStatetoProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: SelectcarTotal,
})
 
export default connect(mapStatetoProps)(CheckOutpage);