/* eslint-disable import/extensions */
import { Dispatch } from 'react';
import axios from 'axios';
import {
  IGetProducersAction, ConsumerActionTypes, IAddToCartAction, IDeleteCartItem, IRemoveItemAction,
} from './consumer.types';
import { IProduct } from '../shop/shop.types';


export const getProducers = () => async (dispatch: Dispatch<IGetProducersAction>) => {
  try {
    const res = await axios.get('/godisapi/producer');
    const data = await res.data;

    dispatch({
      type: ConsumerActionTypes.GET_PRODUCERS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
};


export const addToCart = (product: IProduct): IAddToCartAction => ({
  type: ConsumerActionTypes.ADD_TO_CART,
  payload: product,
});

export const deleteCartItem = (productId: number): IDeleteCartItem => ({
  type: ConsumerActionTypes.DELETE_CART_ITEM,
  payload: productId,
});

export const removeItem = (item: IProduct): IRemoveItemAction => ({
  type: ConsumerActionTypes.REMOVE_ITEM,
  payload: item,
});
