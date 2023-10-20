import axios from "axios";

import {
  ADD_TO_CART,
  GetCartFailure,
  GetCartRequest,
  GetCartSuccess,
} from "./actionTypes";
import AddToCart from "../../Components/AddToCart";

export const cart = (id) => (dispatch) => {
  dispatch({ type: GetCartRequest });
  axios
    .get()
    .then((res) => {
      dispatch({ type: GetCartSuccess, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GetCartFailure, payload: err });
    });
};

export const AddtoCart = (payload) => {
  return { type: ADD_TO_CART, payload };
};
