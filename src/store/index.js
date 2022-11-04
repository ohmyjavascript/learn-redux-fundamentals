import { legacy_createStore as createStore, compose } from 'redux';
import { combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import productsReducer from './products';
import { addLoggingOnDispatch } from '../add-ons/enhancers';
import { loggerMiddleware, blockActionMiddleware } from '../add-ons/middleware';

const rootReducer = combineReducers({
  products: productsReducer,
});

const composedEnhancer = compose(addLoggingOnDispatch);
const middlewareEnhancer = applyMiddleware(
  loggerMiddleware,
  blockActionMiddleware
);

// create the store
const store = createStore(
  rootReducer,
  composeWithDevTools(composedEnhancer, middlewareEnhancer)
);
export default store;
