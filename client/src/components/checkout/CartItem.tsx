import * as React from 'react';
import { connect } from 'react-redux';
import { IProduct } from '../../redux/producer/producer.types';
import { removeItem, addToCart } from '../../redux/concumer/consumer.actions';


interface Props {
  item: IProduct;
  removeItem: (item: IProduct) => void;
  addToCart: (product: IProduct) => void;
}


const CartItem: React.FC<Props> = ({ item, removeItem, addToCart }) => (
  <div className="CheckoutItem">
    <p>{item.name}</p>
    <p>
      {' '}
      <em onClick={() => removeItem(item)}>&#8249;</em>
      {' '}
      {item.qty}
      {' '}
      <em onClick={() => addToCart(item)}>&#8250;</em>
      {' '}
    </p>
    <p>{item.price}</p>
  </div>
);


export default connect(null, { removeItem, addToCart })(CartItem);
