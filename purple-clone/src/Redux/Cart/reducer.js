import {
  ADD_TO_CART,
  GetCartFailure,
  GetCartRequest,
  GetCartSuccess,
} from "./actionTypes";

const inistate = {
  isLoading: false,
  isError: false,
  cart: [],
};

export function reducer(state = inistate, { type, payload }) {
  // console.log(payload);
  switch (type) {
    case GetCartRequest: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GetCartSuccess: {
      return {
        ...state,
        // cartData: [...state.cartData, payload],
        isLoading: false,
      };
    }
    case GetCartFailure: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    }

    default: {
      return state;
    }
  }
}
