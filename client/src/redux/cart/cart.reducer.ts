/* eslint-disable import/extensions */
import { ICartState, ActionTypesCart, CartActionTypes } from './cart.types';
import { addItemToCart } from './cart.utils';
import { removeFromCartItem } from '../concumer/consumer.utils';

const initialState: ICartState = {
  hidden: false,
  loading: true,
  productsCart: [],
};

export default (state: ICartState = initialState, action: CartActionTypes) => {
  switch (action.type) {
    case ActionTypesCart.ADD_ITEM:
      return {
        ...state,
        // productsCart: [...state.productsCart, action.payload],
        productsCart: addItemToCart(state.productsCart, action.payload),
        loading: false,
      };
    case ActionTypesCart.DELETE_ITEM_FROM_CART:
      return {
        ...state,
        productsCart: state.productsCart.filter((product) => product.id !== action.payload),
        loading: false,
      };

    case ActionTypesCart.REMOVE_ITEM:
      return {
        ...state,
        productsCart: removeFromCartItem(state.productsCart, action.payload),
        loading: false,
      };
    default:
      return state;
  }
};
