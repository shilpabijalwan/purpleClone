import React from "react";
import { ADD_TO_Wishlist } from "./actionTypes";
const inistate = {
  wishlist: [],
};
export function reducer(state = inistate, { type, payload }) {
  switch (type) {
    case ADD_TO_Wishlist:
      return {
        ...state,
        wishlist: [...state.wishlist, payload],
      };
    default: {
      return state;
    }
  }
}
