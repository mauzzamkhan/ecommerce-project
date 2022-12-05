import {
  ADD_ITEM,
  EMPTY_CART,
  REMOVE_ITEM,
  UPDATE_QTY,
  ORDER_LIST,
  
  API_DATA,
  LOGIN_API_DATA,
} from "./cart-constants";

const initialState = {
  cartItems: [],
  
   orderList:[],
   apiData:[],
   loginApiData:[]
  //    orderItem:["hi i am from orderItem"],
  // orderDetails:{},

    // orderItem: [],
  // orderItems:[],
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
        // ...state,orderItems:state.cartItems,
        // ...state,orderItems:state.cartItems,

        ...state,
        cartItems: [],
      };

      case ORDER_LIST:
        return {
          ...state,
          orderList:[...state.orderList,...action.payload],
        };
        case API_DATA:
        return{
        ...state,
        apiData: action.payload
      }
      case LOGIN_API_DATA:
        return{
          ...state,
          loginApiData: action.payload
        }


     
    default:
      return state;
  }
};

export default reducer;
