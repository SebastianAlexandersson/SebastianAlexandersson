/* eslint-disable import/extensions */
import { IProduct } from '../shop/shop.types';
import {
  ActionTypesCart, IDeleteItemFromCartAction, IAddProductAction, IRemoveProductAction,
} from './cart.types';

//

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
