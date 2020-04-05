/* eslint-disable @typescript-eslint/interface-name-prefix */

export interface IProducer{
  id: number;
  name: string;
}

export interface IProduct{
  name: string;
  qty: number;
  price: number;
  producer: IProducer['id'];
}


export interface IProducerState{
  loading: boolean;
  producer: null | IProducer;
  error: null | Record<string, any>;
  orderProduct: null | Record<string, any>; // order product type //TODO:
  deal: null | Record<string, any>; // deal type //TODO:
  products: any;
}


export enum ProducerActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
  CREATE_PRODUCER = 'CREATE_PRODUCER',
}


export interface IAddProductAction {
  type: ProducerActionTypes.ADD_PRODUCT;
  payload: IProduct;
}


export interface ICreateProducerAction {
  type: ProducerActionTypes.CREATE_PRODUCER;
  payload: string; // just the name
}

export interface IDeleteProductAction {
  type: ProducerActionTypes.DELETE_PRODUCT;
  payload: string; // sending id to the reducer
}

export type ProducerTypesReducer =
   IAddProductAction | IDeleteProductAction | ICreateProducerAction
