import { Add_Adress } from "./actionTypes";
const init = {
  adress: [],
};
export function reducer(state = init, { type, payload }) {
  switch (type) {
    case Add_Adress: {
      return {
        ...state,
        adress: [payload, ...state.adress],
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
}
