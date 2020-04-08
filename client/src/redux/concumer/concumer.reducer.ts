import { IConsumerState, ConsumerActionTypes, ConsumerReducerType } from './consumer.types';


const initialState: IConsumerState = {
  loading: false,
  consumer: null,
  cart: [],
  error: null,
};

export default (state: IConsumerState = initialState, action: ConsumerReducerType) => {
  switch (action.type) {
    case ConsumerActionTypes.GET_PRODUCERS:
      return {
        ...state,
        producers: action.payload,
        loading: false,
      };
    case ConsumerActionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        loading: false,
      };

    default:
      return state;
  }
};
