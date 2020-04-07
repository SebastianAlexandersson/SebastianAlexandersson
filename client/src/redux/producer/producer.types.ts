/* eslint-disable @typescript-eslint/interface-name-prefix */

export interface IProducer{
  id: number;
  name: string;
}

export interface IProduct{
  id: number;
  name: string;
  qty: number;
  price: number;
  producer: IProducer;
  // producer: IProducer['id'];
}


export interface IProducerState{
  loading: boolean;
  error: null | Record<string, any>;
  products: [];
}


export enum ProducerActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
  GET_PRODUCT_BY_PRODUCER ='GET_PRODUCT_BY_PRODUCER',
  GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS',
}


export interface IAddProductAction {
  type: ProducerActionTypes.ADD_PRODUCT;
  payload: IProduct;
}


export interface IGetProductByProducer {
  type: ProducerActionTypes.GET_PRODUCT_BY_PRODUCER;
  payload: IProduct;
}

export interface IGetAllProducts {
  type: ProducerActionTypes.GET_ALL_PRODUCTS;
  payload: IProduct;
}
export interface IDeleteProductAction {
  type: ProducerActionTypes.DELETE_PRODUCT;
  payload: string; // sending id to the reducer
}


export type ProducerTypesReducer =
   IAddProductAction | IDeleteProductAction | IGetProductByProducer | IGetAllProducts
