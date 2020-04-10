/* eslint-disable import/extensions */
import { IShopState, ActionTypesShop, ShopActionTypes } from './shop.types';

const initialState: IShopState = {
  isLoading: true,
  error: null,
  products: [],
};

export default (state: IShopState = initialState, action: ShopActionTypes) => {
  switch (action.type) {
    case ActionTypesShop.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
