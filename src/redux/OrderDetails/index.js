import { combineReducers } from "redux";
import reducer from "../cart/cart-reducer";
import orderReducer from "./order-reducer";

const rootReducer= combineReducers({
    reducer,
    orderReducer,
})

export default rootReducer;