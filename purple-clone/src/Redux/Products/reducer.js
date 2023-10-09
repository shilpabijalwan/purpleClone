import {
  GET_PRODUCT_SUCCESS,
  PRODUCT_FAILTURE,
  PRODUCT_REQUEST,
} from "./actionType";

const iniState = {
  isLoading: false,
  isError: false,
  products: {},
};
export function reducer(state = iniState, { type, payload }) {
  switch (type) {
    case PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case PRODUCT_FAILTURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
}
