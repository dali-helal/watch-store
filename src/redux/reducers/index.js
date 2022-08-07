import { combineReducers } from "redux";
import { productsReducer} from "./ProductsReducer.js";
import {FilterReducer} from "./FilterReducer"
const reducers = combineReducers({
  allProducts: productsReducer,
  filter : FilterReducer
});
export default reducers;