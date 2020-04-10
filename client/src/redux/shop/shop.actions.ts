import { Dispatch } from 'react';
import axios from 'axios';
import { IGetProductsAction, ActionTypesShop, IGetErrorAction } from './shop.types';


export const getAllProducts = () => async (dispath: Dispatch<IGetProductsAction>) => {
  try {
    const response = await axios.get('/godisapi/product');
    dispath({
      type: ActionTypesShop.GET_PRODUCTS,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getCollectionError = (message: Record<string, any>): IGetErrorAction => ({
  type: ActionTypesShop.GET_PRODUCTS_ERROR,
  payload: message,
});
