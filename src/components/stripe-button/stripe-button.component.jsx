import React, { Component } from 'react';
import StripeCheckout from "react-stripe-checkout";

const onToken = token => {
    console.log(token);
    alert("payment successful");
}

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HfDzxCyBMxyzKznXC0cKcGkvfvP39eFgwXv1yuRkpbDo30noeyUXyoROHua8LPOuttjAnQBZt6ZkRTktcBRutwW00V7HEPB78';


    return ( 
        <StripeCheckout 
          label = "Pay now"
          name = "CRWN Soya Ltd"
          billingAddress
          shippingAddress
          image="https://sendeyo.com/up/d/f3eb2117da"
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel= 'Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
     );
}

 
export default StripeCheckoutButton;