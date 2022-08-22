import React from 'react';

import './checkout.scss';

import { connect } from 'react-redux';
import {
  selectCartItems,
  selectCartItemsTotal,
} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className='total'>
      <span> TOTAL: ${total} </span>
    </div>
    <div className='test-warning'>
      *Use test credit card for payment*
      <br />
      4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
});

//export default connect(mapStateToProps)(CheckoutPage);
export default CheckoutPage;
