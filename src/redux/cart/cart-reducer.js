import {
  ADD_ITEM,
  EMPTY_CART,
  REMOVE_ITEM,
  UPDATE_QTY,
} from "./cart-constants";

const initialState = {
  cartItems: [],
  orderItem: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case UPDATE_QTY:
      return {
        ...state,
        cartItems: [...action.payload],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case EMPTY_CART:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export default reducer;
