/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux';
import { selectConsumerCartItems, selectCartTotal } from '../../redux/concumer/consumer.selector';
import { IProduct } from '../../redux/shop/shop.types';
import CartItem from './CartItem';
import './Checkout.css';

interface Props {
  userCart: IProduct[];
  total: number;
}


const Checkout: React.FC<Props> = ({ userCart, total }) => (
  <div className="Checkout">
    <h1> Checkout </h1>
    <h3>Your Items</h3>
    <div className="Checkout-Cart">
      <div className="Checkout-Header">
        <h4>Name</h4>
        <h4>
          {' '}

          {' '}
          Qty
          {' '}

          {' '}
        </h4>
        <h4>Price</h4>
      </div>
      {userCart.length > 0 && userCart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="Checkout-footer">
        <p className="total-price">
          Total:
          {userCart.length > 0 && total !== 0 && total}
        </p>
        <button type="button">Pay</button>
      </div>
    </div>

  </div>
);

const mapStateToProps = (state: AppState) => ({
  userCart: selectConsumerCartItems(state),
  total: selectCartTotal(state),
});
export default connect(mapStateToProps)(Checkout);
