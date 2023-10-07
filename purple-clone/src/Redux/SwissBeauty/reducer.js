import {
  SWISS_PRODUCT_FAILTURE,
  SWISS_PRODUCT_REQUEST,
  SWISS_PRODUCT_SUCCESS,
} from "./actionTypes";

const iniState = {
  isLoading: false,
  isError: false,
  swissproducts: [],
  singleSwissProduct: {},
};
export function reducer(state = iniState, { type, payload }) {
  switch (type) {
    case SWISS_PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case SWISS_PRODUCT_FAILTURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case SWISS_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        swissproducts: payload,
      };
    }
    case "SWISS_Single_PRODUCT_SUCCESS": {
      return {
        ...state,
        isLoading: false,
        singleSwissProduct: payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
}
