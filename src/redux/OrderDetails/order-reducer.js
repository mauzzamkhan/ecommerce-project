import { ADD_CART_ITEMS, ADD_ORDER, EMPTY_ORDER, REMOVE_ORDER } from "./order-constant";

const initialState = {
  // orderList: [],
  
};


const orderReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,  
      orderList:[...state.orderList,action.payload]

      };

    case REMOVE_ORDER:
      return {
        ...state,
        orderList: state.orderList.filter((item) => item.id !== action.payload),
        // orderList: state.orderList.slice(action.payload, 1),
        

      };
    case EMPTY_ORDER:
      return {
        ...state,
        orderList: [],
      };
      case ADD_CART_ITEMS:
        return{
          ...state,
          orderList:[...state.orderList,{"items":action.payload}]
        }

    default:
      return state;
  }
};

export default orderReducer;
