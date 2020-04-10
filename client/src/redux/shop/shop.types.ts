/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import { IProducer } from '../producer/producer.types';

export interface IProduct{
  id: number;
  name: string;
  qty: number;
  price: number;
  producer: IProducer;
}


export interface IShopState {
  products: IProduct[];
  isLoading: boolean;
  error: Record<string, any> | null;
}


export enum ActionTypesShop{
  GET_PRODUCTS = 'GET_PRODUCTS',
  GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR',
}


export interface IGetProductsAction {
  type: ActionTypesShop.GET_PRODUCTS;
  payload: IProduct[];
}


export interface IGetErrorAction {
  type: ActionTypesShop.GET_PRODUCTS_ERROR;
  payload: Record<string, any>;
}


export type ShopActionTypes =
  IGetProductsAction |
  IGetErrorAction
