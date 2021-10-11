import { combineReducers } from "redux";
import Cart from "./cart.reducer";
import Product from "./product.reducer";

export default () => combineReducers({
    cart: Cart,
    products: Product,
  }); 