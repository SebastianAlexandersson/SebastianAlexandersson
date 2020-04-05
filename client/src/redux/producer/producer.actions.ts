/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import { Dispatch } from 'react';
import axios from 'axios';
import {
  IProduct, IAddProductAction, ProducerActionTypes, IDeleteProductAction, ICreateProducerAction,
} from './producer.types';

export const createProducer = (
  name: string,
) => async (dispatch: Dispatch<ICreateProducerAction>) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.post('/godisapi/producer', name, config);

    const data = await response.data;

    dispatch({
      type: ProducerActionTypes.CREATE_PRODUCER,
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const addNewProduct = (
  product: IProduct,
) => async (dispatch: Dispatch<IAddProductAction>) => {
  try {
    const response = await fetch('/godisapi/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    const body = await response.json();

    dispatch({
      type: ProducerActionTypes.ADD_PRODUCT,
      payload: body,
    });
  } catch (err) {
    console.error(err);
  }
};


export const deleteProduct = () => async (dispatch: Dispatch<IDeleteProductAction>) => {
  try {
    dispatch({
      type: ProducerActionTypes.DELETE_PRODUCT,
      payload: '',
    });
  } catch (err) {
    console.error(err);
  }
};
