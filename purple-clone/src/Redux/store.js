import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import thunk from "redux-thunk";

import { reducer as productReducer } from "./Products/reducer";
import { reducer as cartReduced } from "./Cart/reducer";
import { reducer as SwissReducer } from "./SwissBeauty/reducer";
import { reducer as wishReducer } from "./Wishlist/reducer";
import { reducer as addressReducer } from "./Address/reducer";
import { reducer as GridReducer } from "./GridImgs/reducer";
const rootReducer = combineReducers({
  //   authReducer: authReducer,
  productReducer: productReducer,
  wishReducer: wishReducer,
  SwissReducer: SwissReducer,
  cartReduced: cartReduced,
  addressReducer: addressReducer,
  GridReducer: GridReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
