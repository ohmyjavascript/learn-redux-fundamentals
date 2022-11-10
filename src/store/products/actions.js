import axios from 'axios';

export const LOAD_PRODUCTS_INIT = 'products/LOAD_PRODUCTS_INIT';
export const LOAD_PRODUCTS = 'products/LOAD_PRODUCTS';
export const ADD_PRODUCT = 'product/ADD_PRODUCT';
export const ADD_FAVORITE = 'favorites/ADD_FAVORITE';

export const loadProductInit = () => {
  return {
    type: LOAD_PRODUCTS_INIT,
  };
};

export const loadProductAction = (products) => {
  return {
    type: LOAD_PRODUCTS,
    payload: products,
  };
};

export const saveProductAction = (id, product) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      id,
      ...product,
    },
  };
};

export async function fetchProducts(dispatch, getState) {
  dispatch(loadProductInit());
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
