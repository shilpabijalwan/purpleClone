import {
  ADD_TO_Wishlist,
  GetWishlistFailure,
  GetWishlistSuccess,
  GetWishlisttRequest,
} from "./actionTypes";
import axios from "axios";

export const getWishlist = (wishproduct) => (dispatch) => {
  dispatch({ type: GetWishlisttRequest });
  axios
    .get()
    .then((res) => {
      dispatch({ type: GetWishlistSuccess, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GetWishlistFailure, payload: err });
    });
};

export const Add_To_WishList = (wishproduct) => {
  return { type: ADD_TO_Wishlist, payload: wishproduct };
};
