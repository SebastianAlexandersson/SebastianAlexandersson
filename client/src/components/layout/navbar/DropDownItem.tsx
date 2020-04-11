/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import { IProduct } from '../../../redux/shop/shop.types';

interface Props {
  item: IProduct;
  deleteCartItem: (productId: number) => void;
  removeItem: (item: IProduct) => void;
  addToCart: (product: IProduct) => void;
}

const DropDownItem: React.FC<Props> = ({
  item, removeItem, deleteCartItem, addToCart,
}) => {
  let a;
  return (
    <li key={item.id}>
      <p>{item.name}</p>
      {' '}

      {' '}
      <p>
        <span className="arrow" onClick={() => removeItem(item)}> &#8249; </span>
        {' '}
        {item.qty}
        {' '}
        <span className="arrow" onClick={() => addToCart(item)}>&#8250;</span>
      </p>
      {' '}

      {' '}

      {' '}
      <p>
        {item.price}
        {' '}
        $
      </p>

      {' '}
      <p><span className="delete" onClick={() => deleteCartItem(item.id)}>&#x292C;</span></p>
    </li>
  );
};
export default DropDownItem;
