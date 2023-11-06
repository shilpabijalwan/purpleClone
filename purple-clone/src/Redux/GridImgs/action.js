import axios from "axios";
import {
  Grid_Img_FAILTURE,
  Grid_Img_REQUEST,
  Grid_Img_SUCCESS,
} from "./actionTypes";

export const GET_Grid_DATA = (dispatch) => {
  dispatch({ type: Grid_Img_REQUEST });
  axios
    .get(`https://server-sepia-tau.vercel.app/grid_Brands`)
    .then((res) => {
      dispatch({ type: Grid_Img_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: Grid_Img_FAILTURE });
    });
};
