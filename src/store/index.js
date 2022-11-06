import { legacy_createStore as createStore } from 'redux';
import { combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import productsReducer from './products';
import favoritesReducer from './favorites';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { productAPIMiddleware } from '../add-ons/middleware';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['products', 'favorites'],
};

const rootReducer = combineReducers({
  products: productsReducer,
  favorites: favoritesReducer,
});
const middlewareEnhancer = applyMiddleware(productAPIMiddleware);
const peristedReducer = persistReducer(persistConfig, rootReducer);

// create the store
export const store = createStore(
  peristedReducer,
  composeWithDevTools(middlewareEnhancer)
);
export const persistor = persistStore(store);
