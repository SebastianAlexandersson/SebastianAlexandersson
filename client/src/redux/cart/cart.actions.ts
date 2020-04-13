/* eslint-disable import/extensions */
import { Dispatch } from 'redux';
import axios from 'axios';
import Cookies from 'js-cookie';
import {
  ActionTypesCart, IDeleteItemFromCartAction, IAddProductAction, IRemoveProductAction, IMakeOrderAction, IOrderProduct,
} from './cart.types';
import { IProduct } from '../shop/shop.types';


export const addProduct = (product: IProduct): IAddProductAction => ({
  type: ActionTypesCart.ADD_ITEM,
  payload: product,
});

export const deleteProductFromCart = (id: number): IDeleteItemFromCartAction => ({
  type: ActionTypesCart.DELETE_ITEM_FROM_CART,
  payload: id,
});

export const removeProduct = (product: IProduct): IRemoveProductAction => ({
  type: ActionTypesCart.REMOVE_ITEM,
  payload: product,
});


export const makeOrder = (
  products: IOrderProduct[],
) => async (dispatch: Dispatch<IMakeOrderAction>) => {
  try {
    let token: any;
    if (Cookies.get('token')) {
      token = Cookies.get('token');
    }


    // console.log('form redux ', products);
    console.log('form redux2 ', JSON.stringify({ products }, null, 2));


    const response = await axios({
      method: 'POST',
      url: '/godisapi/consumer',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: { products },
    });

    // const response = await fetch('/godisapi/consumer', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${token}`,
    //   },
    //   body: JSON.stringify(products),
    // });


    dispatch({
      type: ActionTypesCart.MAKE_ORDER,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
};
