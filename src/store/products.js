import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

// Initial state object
const INITIAL_STATE = {
  products: [],
};

export async function fetchProducts(dispatch, getState) {
  const response = await axios.get('https://fakestoreapi.com/products');
  dispatch({
    type: 'products/LOAD_PRODUCTS',
    payload: response.data,
  });
}

function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'products/LOAD_PRODUCTS':
      const sliced = action.payload.slice(0, 8);
      return {
        ...state,
        products: sliced,
      };

    case 'product/ADD_PRODUCT':
      const { title, price, category } = action.payload;
      const newProduct = {
        text: title,
        price,
        category,
        id: uuidv4(),
        isFavorite: false,
      };
      return {
        ...state,
        products: [...state.products, newProduct],
      };

    case 'favorites/ADD_FAVORITE':
      return {
        ...state,
        products: state.products.map((prod) => {
          return prod.id === action.payload
            ? {
                ...prod,
                isFavorite: !prod.isFavorite,
              }
            : prod;
        }),
      };
    default:
      return state;
  }
}

export default productsReducer;
