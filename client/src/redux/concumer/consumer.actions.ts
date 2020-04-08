import { Dispatch } from 'react';
import axios from 'axios';
import {
  IGetProducersAction, ConsumerActionTypes, IAddToCartAction,
} from './consumer.types';
import { IProduct } from '../producer/producer.types';


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
