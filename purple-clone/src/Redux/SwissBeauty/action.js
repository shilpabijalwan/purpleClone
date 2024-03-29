import axios from "axios";
import {
  SWISS_PRODUCT_FAILTURE,
  SWISS_PRODUCT_REQUEST,
  SWISS_PRODUCT_SUCCESS,
} from "./actionTypes";

export const GET_SWISS_DATA = (params) => (dispatch) => {
  dispatch({ type: SWISS_PRODUCT_REQUEST });
  axios
    .get(`https://server-sepia-tau.vercel.app/SwissBeautyProducts`, params)
    .then((res) => {
      dispatch({ type: SWISS_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: SWISS_PRODUCT_FAILTURE });
    });
};
export const GET_Single_SWISS_DATA = (id) => (dispatch) => {
  dispatch({ type: SWISS_PRODUCT_REQUEST });
  axios
    .get(`https://server-sepia-tau.vercel.app/SwissBeautyProducts/${id}`)
    .then((res) => {
      dispatch({ type: "SWISS_Single_PRODUCT_SUCCESS", payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: SWISS_PRODUCT_FAILTURE });
    });
};
