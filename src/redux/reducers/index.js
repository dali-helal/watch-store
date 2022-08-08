import { combineReducers } from "redux";
import { productsReducer} from "./ProductsReducer.js";
import {FilterReducer} from "./FilterReducer"
const reducers = combineReducers({
  filter : FilterReducer,
 allProducts :productsReducer
});
export default reducers;