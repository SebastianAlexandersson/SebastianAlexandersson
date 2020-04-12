/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/interface-name-prefix */

import { IProduct } from '../shop/shop.types';

export interface IOrderProduct {
  id: number;
  qty: number;
}
export interface ICartState {
  hidden: boolean;
  productsCart: IProduct[];
  loading: boolean;
  products: IOrderProduct[];// final order
}

export enum ActionTypesCart {
  TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN',
  ADD_ITEM = 'ADD_ITEM',
  DELETE_ITEM_FROM_CART = 'DELETE_ITEM_FROM_CART',
  REMOVE_ITEM = 'REMOVE_ITEM',
  MAKE_ORDER = 'MAKE_ORDER'
}

export interface IToggleCartAction {
  type: ActionTypesCart.TOGGLE_CART_HIDDEN;
}

export interface IAddProductAction {
  type: ActionTypesCart.ADD_ITEM;
  payload: IProduct;
}
export interface IDeleteItemFromCartAction {
  type: ActionTypesCart.DELETE_ITEM_FROM_CART;
  payload: number;
}

export interface IRemoveProductAction {
  type: ActionTypesCart.REMOVE_ITEM;
  payload: IProduct;
}
export interface IMakeOrderAction {
  type: ActionTypesCart.MAKE_ORDER;
  // payload: IOrderProduct[];
  payload: any;
}


export type CartActionTypes =
 IToggleCartAction |
 IAddProductAction |
 IDeleteItemFromCartAction |
 IRemoveProductAction |
 IMakeOrderAction
