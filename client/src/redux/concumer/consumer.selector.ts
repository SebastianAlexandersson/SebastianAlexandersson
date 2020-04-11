/* eslint-disable import/extensions */
import { createSelector } from 'reselect';
import { AppState } from '..';
import { IConsumerState } from './consumer.types';
import { IProduct } from '../shop/shop.types';


const selectProducer = (state: AppState) => state.consumer;


export const selectConsumerCartItems = createSelector(
  [selectProducer],
  (state: IConsumerState) => state.cart,
);


export const selectCartCount = createSelector(
  [selectConsumerCartItems],
  (cartItems: IProduct[]) => cartItems.reduce((qty, item) => qty + item.qty, 0),
);

export const selectCartTotal = createSelector(
  [selectConsumerCartItems],
  (cartItems: IProduct[]) => cartItems.reduce((qty, item) => qty + item.qty * item.price, 0),
);
