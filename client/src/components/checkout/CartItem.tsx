/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/extensions */
import * as React from 'react';
import { connect } from 'react-redux';
import { IProduct } from '../../redux/shop/shop.types';


interface Props {
  item: IProduct;
  // removeItem: (item: IProduct) => void;
  // addToCart: (product: IProduct) => void;
}


const CartItem: React.FC<Props> = ({ item }) => (
  <div className="CheckoutItem">
    <p>{item.name}</p>
    <p>
      {' '}
      <em>&#8249;</em>
      {' '}
      {item.qty}
      {' '}
      <em>&#8250;</em>
      {' '}
    </p>
    <p>{item.price}</p>
  </div>
);


export default connect(null)(CartItem);
