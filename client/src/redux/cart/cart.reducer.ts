import { ICartState, ActionTypesCart, CartActionTypes } from './cart.types';

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

      };
    default:
      break;
  }
};
