/* eslint-disable import/extensions */
import { IConsumerState, ConsumerActionTypes, ConsumerReducerType } from './consumer.types';
import { removeFromCartItem, adDItemToCart } from './consumer.utils';


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
        // cart: [...state.cart, action.payload],
        cart: adDItemToCart(state.cart, action.payload),
        loading: false,
      };
    case ConsumerActionTypes.DELETE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
        loading: false,
      };

    case ConsumerActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cart: removeFromCartItem(state.cart, action.payload),
        loading: false,
      };
    default:
      return state;
  }
};
