import React, { Component } from 'react';
import {connect} from "react-redux";
import CartItem from '../cart-item/cart-item.component';


import "./checkout-item.styles.scss";

const CheckoutItem = ({cartItem: {imageUrl,name,price,quantity}}) => {
    console.log(CartItem);
    return ( <div className="checkout-item">
        <div className="image-container">
            <img  src={`${imageUrl}`} alt='item'></img>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <span className="remove-button">&#10005;</span>
    </div> );
}
 
export default CheckoutItem;