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
import { deleteCartItem, removeItem, addToCart } from '../../../redux/concumer/consumer.actions';
import { selectConsumerCartItems, selectCartTotal } from '../../../redux/concumer/consumer.selector';
import DropDownItem from './DropDownItem';


interface Props {
  cartItems: IProduct[] | never;
  total: number;
  deleteCartItem: (productId: number) => void;
  removeItem: (item: IProduct) => void;
  addToCart: (product: IProduct) => void;
}

const DropDown: React.FC<Props> = ({
  cartItems, total, deleteCartItem, removeItem, addToCart,
}) => (
  <div className="DropDownCart">
    {cartItems.length > 0 && cartItems.map((item) => (
      <DropDownItem
        key={item.id}
        item={item}
        deleteCartItem={deleteCartItem}
        removeItem={removeItem}
        addToCart={addToCart}
      />
    )) }
    <div className="CartFooter">
      <strong className="total">
        Total Price:
        {' '}
        {cartItems.length > 0 && total !== 0 && total}
        {' '}
      </strong>
      <button type="button">Checkout</button>
    </div>


  </div>
);


const mapStateToProps = (state: AppState) => ({
  total: selectCartTotal(state),
  cartItems: selectConsumerCartItems(state),
});


export default connect(mapStateToProps, { deleteCartItem, removeItem, addToCart })(DropDown);
