/* eslint-disable @typescript-eslint/interface-name-prefix */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import { Dispatch } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {
  IAddProductAction,
  ProducerActionTypes, IDeleteProductAction,
  IProduct,
  ISetCurrent,
  IProductUpdateFormData,
  IUpdateProductAction,
  IClearCurrent,
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
  let token: any;
  if (Cookies.get('token')) {
    token = Cookies.get('token');
  }

  try {
    const res = await axios({
      method: 'POST',
      url: '/godisapi/producer',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: product,
    });

    dispatch({
      type: ProducerActionTypes.ADD_PRODUCT,
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

export const clearCurrent = (): IClearCurrent => ({
  type: ProducerActionTypes.CLEAR_CURRENT,
});

export const updateProduct = (
  formData: IProductUpdateFormData,
) => async (dispatch: Dispatch<IUpdateProductAction>) => {
  try {
    let token: any;
    if (Cookies.get('token')) {
      token = Cookies.get('token');
    }

    const res = await axios({
      method: 'PUT',
      url: `/godisapi/producer/${formData.id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: formData,
    });

    dispatch({
      type: ProducerActionTypes.UPDATE_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};


export const deleteProduct = (
  productId: number,
) => async (dispatch: Dispatch<IDeleteProductAction>) => {
  try {
    let token: any;
    if (Cookies.get('token')) {
      token = Cookies.get('token');
    }

    await axios({
      method: 'DELETE',
      url: `/godisapi/producer/${productId.toString()}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: ProducerActionTypes.DELETE_PRODUCT,
      payload: productId,
    });
  } catch (err) {
    console.error(err);
  }
};
