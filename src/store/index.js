import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import productsReducer from './products';
import { addLoggingOnDispatch } from '../add-ons/enhancers';

const rootReducer = combineReducers({
  products: productsReducer,
});

// create the store
const store = createStore(
  rootReducer,
  composeWithDevTools(addLoggingOnDispatch)
);
export default store;
