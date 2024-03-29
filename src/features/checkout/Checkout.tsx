import './checkout.scss';
import CheckoutItem from './item/CheckoutItem';
import StripeCheckoutButton from '../../components/button/stripe-button/StripeButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const CheckoutPage = () => {
  const cartItems: CartItem[] = useSelector(
    (state: RootState) => state.cart.cartItems
  );

  const itemsTotalPrice = useSelector(
    (state: RootState) => state.cart.totalPrice
  );

  return (
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
        <span> TOTAL: ${itemsTotalPrice} </span>
      </div>
      <div className='test-warning'>
        *Use test credit card for payment*
        <br />
        4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
      </div>
      <StripeCheckoutButton price={itemsTotalPrice} />
    </div>
  );
};

export default CheckoutPage;
