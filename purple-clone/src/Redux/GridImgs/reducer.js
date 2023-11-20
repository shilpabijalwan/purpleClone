import {
  Grid_Img_FAILTURE,
  Grid_Img_REQUEST,
  Grid_Img_SUCCESS,
} from "./actionTypes";

const iniState = {
  isLoading: false,
  isError: false,
  gridImg: [],
};
export function reducer(state = iniState, { type, payload }) {
  switch (type) {
    case Grid_Img_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case Grid_Img_FAILTURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case Grid_Img_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        gridImg: payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
}
