/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/interface-name-prefix */

import { IProduct } from '../shop/shop.types';


export interface ICartState {
  hidden: boolean;
  productsCart: IProduct[];
  loading: boolean;
}

export enum ActionTypesCart {
  TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN',
  ADD_ITEM = 'ADD_ITEM',
  DELETE_ITEM_FROM_CART = 'DELETE_ITEM_FROM_CART',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export interface IToggleCartAction {
  type: ActionTypesCart.TOGGLE_CART_HIDDEN;
}

export interface IAddItemAction {
  type: ActionTypesCart.ADD_ITEM;
  payload: IProduct;
}
export interface DeleteItemFromCartAction {
  type: ActionTypesCart.DELETE_ITEM_FROM_CART;
  payload: number;
}

export interface RemoveItemAction {
  type: ActionTypesCart.REMOVE_ITEM;
  payload: IProduct;
}


export type CartActionTypes =
 IToggleCartAction |
 IAddItemAction |
 DeleteItemFromCartAction |
 RemoveItemAction
