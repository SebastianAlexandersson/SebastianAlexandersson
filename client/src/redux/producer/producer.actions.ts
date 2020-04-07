/* eslint-disable @typescript-eslint/interface-name-prefix */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import { Dispatch } from 'react';
import axios from 'axios';
import {
  IProduct, IAddProductAction,
  ProducerActionTypes, IDeleteProductAction,
  IGetAllProducts,
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
