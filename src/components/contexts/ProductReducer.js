import { addToCart, decreaseInCart, increaseInCart } from "../helpers/helpers";
import {
  CLEAR_CART,
  ADD_PRODUCT_TO_CART,
  INCREASE_PRODUCT_QUANTITY_IN_CART,
  DECREASE_PRODUCT_QUANTITY_IN_CART,
  REMOVE_PRODUCT_FROM_CART,
} from "./types";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return addToCart({ ...state }, action.payload);

    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    case INCREASE_PRODUCT_QUANTITY_IN_CART:
      return increaseInCart({ ...state }, action.payload);

    case DECREASE_PRODUCT_QUANTITY_IN_CART:
      return decreaseInCart({ ...state }, action.payload);

    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
