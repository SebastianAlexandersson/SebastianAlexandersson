/* eslint-disable import/extensions */
/* eslint-disable no-undef */

import { IProducerState, ProducerActionTypes, ProducerTypesReducer } from './producer.types';

const initialState: IProducerState = {
  loading: true,
  error: null,
  products: [],
};

export default (state: IProducerState = initialState, action: ProducerTypesReducer) => {
  switch (action.type) {
    case ProducerActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false,
      };

    default:
      return state;
  }
};
