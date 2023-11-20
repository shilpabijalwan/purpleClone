import axios from "axios";

import {
  PRODUCT_FAILTURE,
  PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionType";

export const Get_Product = (id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(`https://server-sepia-tau.vercel.app/featured/${id}`)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
      // console.log(res.data);
    })
    .catch((error) => {
      dispatch({ type: PRODUCT_FAILTURE });
    });
};
