import { ADD_FAVORITE } from 'store/products/actions';

const INIT_STATE = [];

function favoritesReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      const itemID = state.includes(action.payload);
      if (!itemID) {
        return [...state, action.payload];
      }
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
}

export default favoritesReducer;
