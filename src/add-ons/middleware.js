import axios from 'axios';

export const loggerMiddleware = (store) => (next) => (action) => {
  console.log('Dispatching an action', action);
  let result = next(action);
  console.log('Next state is ', store.getState());
  return result;
};

export const blockActionMiddleware = (store) => (next) => (action) => {
  console.log('Hitting block middleware');
  if (action.type === 'products/BOXING_DAY_OFFERS') {
    return;
  } else {
    next(action);
  }
};

export const productAPIMiddleware = (store) => (next) => (action) => {
  if (action.type === 'products/LOAD_PRODUCTS_INIT') {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      store.dispatch({
        type: 'products/LOAD_PRODUCTS',
        payload: res.data,
      });
    });
  }
  return next(action);
};
