import { combineReducers } from "redux";
import productReducer from "./products/ProductReducer";
import cartReducer from "./carts/CartReducer";
import homeReducer from "./pagess/HomeReducer";
export const rootReducer= combineReducers({
  products: productReducer,
  pages:homeReducer,
  carts : cartReducer
});