/* eslint-disable import/extensions */
import { IConsumerState, ConsumerReducerType, ConsumerActionTypes } from './consumer.types';


const initialState: IConsumerState = {
  loading: false,
  consumer: null,
  currentUser: null,
  error: null,
  orders: [],
};

export default (state: IConsumerState = initialState, action: ConsumerReducerType) => {
  switch (action.type) {
    case ConsumerActionTypes.GET_MY_ORDERS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
