import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

// Initial state object
const INITIAL_STATE = {
  products: [],
};

const loadProductAction = (products) => {
  return {
    type: 'products/LOAD_PRODUCTS',
    payload: products,
  };
};

const saveProductAction = (id, product) => {
  return {
    type: 'product/ADD_PRODUCT',
    payload: {
      id,
      ...product,
    },
  };
};

export async function fetchProducts(dispatch, getState) {
  const response = await axios.get('https://fakestoreapi.com/products');
  dispatch(loadProductAction(response.data));
}

export function saveProducts(product) {
  return async function saveNewProductToDB(dispatch, getState) {
    product.rating = {
      rate: 0,
      count: 0,
    };
    const post = JSON.stringify(product);
    const response = await axios.post(
      'https://fakestoreapi.com/products',
      post
    );
    dispatch(saveProductAction(response.data.id, product));
  };
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
      return {
        ...state,
        products: [...state.products, action.payload],
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
