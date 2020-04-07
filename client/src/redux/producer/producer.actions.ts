/* eslint-disable @typescript-eslint/interface-name-prefix */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import { Dispatch } from 'react';
import axios from 'axios';
import {
  IAddProductAction,
  ProducerActionTypes, IDeleteProductAction,
  IGetAllProducts,
  IProduct,
  ISetCurrent,
} from './producer.types';


export interface IProductFormData { // type when adding a new product in candy shop component
  name: string;
  price: number;
  qty: number;
  producerName: string | undefined;
}

export const addNewProduct = (
  product: IProductFormData,
) => async (dispatch: Dispatch<IAddProductAction>) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('/godisapi/product', product, config);

    dispatch({
      type: ProducerActionTypes.ADD_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};


export const getAllProducts = () => async (dispatch: Dispatch<IGetAllProducts>) => {
  try {
    const res = await axios.get('/godisapi/product');
    dispatch({
      type: ProducerActionTypes.GET_ALL_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};


export const setCurrent = (product: IProduct): ISetCurrent => ({
  type: ProducerActionTypes.SET_CURRENT,
  payload: product,
});


export const updateAllProducts = () => {};


export const deleteProduct = (
  productId: string,
) => async (dispatch: Dispatch<IDeleteProductAction>) => {
  try {
    dispatch({
      type: ProducerActionTypes.DELETE_PRODUCT,
      payload: '',
    });
  } catch (err) {
    console.error(err);
  }
};
