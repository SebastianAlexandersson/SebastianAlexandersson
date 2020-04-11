/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import { IProducer } from '../producer/producer.types';
import { IProduct } from '../shop/shop.types';

export interface IConsumer {
  id: number;
  firstName: string;
  lastName: string;
  adress: string;
}

export interface IConsumerState{
  loading: boolean;
  consumer: null | IConsumer;
  error: null | Record<string, any>;
  cart: [] | IProduct[] | never;
}

export enum ConsumerActionTypes {
  GET_PRODUCERS = 'GET_PRODUCERS',
  ADD_TO_CART = 'ADD_TO_CART',
  DELETE_CART_ITEM = 'DELETE_CART_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
}


export interface IGetProducersAction {
  type: ConsumerActionTypes.GET_PRODUCERS;
  payload: IProducer[];
}
export interface IAddToCartAction {
  type: ConsumerActionTypes.ADD_TO_CART;
  payload: IProduct;
}
export interface IDeleteCartItem {
  type: ConsumerActionTypes.DELETE_CART_ITEM;
  payload: number;
}

export interface IRemoveItemAction {
  type: ConsumerActionTypes.REMOVE_ITEM;
  payload: IProduct;
}

export type ConsumerReducerType =
 IGetProducersAction | IAddToCartAction | IDeleteCartItem | IRemoveItemAction
