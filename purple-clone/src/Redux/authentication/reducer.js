import { LoginData } from "./action";

const init = {
  LoginDetails: [],
  istrue: false,
};

export function reducer(state = init, { type, payload }) {
  switch (type) {
    case LoginData: {
      return {
        ...state,
        LoginDetails: [payload, ...state.LoginDetails],
        istrue: true,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
}
