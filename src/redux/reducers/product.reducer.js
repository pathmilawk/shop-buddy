import { FETCH_PRODUCTS } from "../constants/action.type";

const INIT_STATE = {
  items: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      return {
        ...state,
        items: action.payload,
      };
    }

    default:
      return state;
  }
};
