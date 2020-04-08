/* eslint-disable @typescript-eslint/interface-name-prefix */
import { IProducer, IProduct } from '../producer/producer.types';

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
  ADD_TO_CART = 'ADD_TO_CART'
}


export interface IGetProducersAction {
  type: ConsumerActionTypes.GET_PRODUCERS;
  payload: IProducer[];
}
export interface IAddToCartAction {
  type: ConsumerActionTypes.ADD_TO_CART;
  payload: IProduct;
}

export type ConsumerReducerType = IGetProducersAction | IAddToCartAction
