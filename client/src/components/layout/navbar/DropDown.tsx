/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../redux';
import { IProduct } from '../../../redux/producer/producer.types';
import { removeItem } from '../../../redux/concumer/consumer.actions';

interface Props {
  cartItems: IProduct[] | never;
  removeItem: (item: IProduct) => void;
}

const DropDown: React.FC<Props> = ({ cartItems, removeItem }) => (
  <div className="DropDownCart">
    <ul className="cartList">
      {cartItems.length > 0 && cartItems.map((item) => (
        <li key={item.id}>
          <p>{item.name}</p>
          {' '}

          {' '}
          <p>
            <span className="arrow"> &#8249; </span>
            {' '}
            {item.qty}
            {' '}
            <span className="arrow">&#8250;</span>
          </p>
          {' '}

          {' '}

          {' '}
          <p>
            <span className="arrow"> &#8249; </span>
            {' '}
            {item.price}
            {' '}
            <span className="arrow">&#8250;</span>
          </p>

          {' '}
          <p><span className="delete" onClick={() => removeItem(item)}>&#x292C;</span></p>
        </li>
      )) }
      <div className="CartFooter">
        <strong className="total">Total Price: </strong>
        <button type="button">Checkout</button>
      </div>
    </ul>

  </div>
);
const mapStateToProps = (state: AppState) => ({
  cartItems: state.consumer.cart,
});


export default connect(mapStateToProps, { removeItem })(DropDown);
