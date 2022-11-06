import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import productsReducer from './products';
import favoritesReducer from './favorites';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['products', 'favorites'],
};

const rootReducer = combineReducers({
  products: productsReducer,
  favorites: favoritesReducer,
});

const peristedReducer = persistReducer(persistConfig, rootReducer);

// create the store
export const store = createStore(peristedReducer, composeWithDevTools());
export const persistor = persistStore(store);
