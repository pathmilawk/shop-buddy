import { ADD_TO_CART, RESET_CART, REMOVE_FROM_CART } from "../constants/action.type";

const INIT_STATE = {
  cartItems: []
};

const addToCart = (state, product) => {
  const existingItem = state.cartItems.find((item) => item.id === product.id);
  if (existingItem) {
    const filteredItems = state.cartItems.filter(item => item.id !== product.id);
    if (existingItem.quantity !== product.quantity) {
      existingItem.quantity = product.quantity;
    }
    
    filteredItems.push(existingItem);
    return filteredItems;
  } else {
    state.cartItems = [...state.cartItems, product];
    return state.cartItems;
  }
};

const removeFromCart = (state, id) => {
  const existingItem = state.cartItems.find((item) => item.id === id);
  if (existingItem) {
    const filteredItems = state.cartItems.filter(item => item.id !== id);
    return filteredItems;
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: addToCart(state, action.payload),
      };
    }
      
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cartItems: removeFromCart(state, action.payload),
      };
    }

    case RESET_CART: {
      return INIT_STATE;
    }

    default:
      return state;
  }
};
