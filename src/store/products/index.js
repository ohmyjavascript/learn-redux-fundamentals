import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: {},
  isLoaded: false,
  isLoading: false,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadProductsInit(state, action) {
      state.isLoading = true;
    },
    loadAllProducts(state, action) {
      const sliced = action.payload.slice(0, 8);
      const entities = sliced.reduce((acc, item) => {
        return {
          ...acc,
          [item.id]: item,
        };
      }, {});
      state.entities = entities;
      state.isLoading = false;
      state.isLoaded = true;
    },
    addFavorite(state, action) {
      const changedEntity = state.entities[action.payload];
      changedEntity.isFavorite = !changedEntity.isFavorite;
      state.entities[action.payload.id] = action.payload.product;
    },
    saveProduct(state, action) {
      state.entities[action.payload.id] = action.payload.product;
    },
  },
});

export const { loadAllProducts, loadProductsInit, addFavorite, saveProduct } =
  productSlice.actions;

export default productSlice.reducer;
