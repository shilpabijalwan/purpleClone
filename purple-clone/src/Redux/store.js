import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as productReducer } from "./Products/reducer";

import { reducer as SwissReducer } from "./SwissBeauty/reducer";
const rootReducer = combineReducers({
  //   authReducer: authReducer,
  productReducer: productReducer,

  SwissReducer: SwissReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
