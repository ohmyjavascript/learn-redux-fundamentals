import { createSelector } from 'reselect';

export const selectFavorites = createSelector(
  (state) => state.products,
  (state) => state.favorites,
  (productsSlice, favoritesSlice) => {
    return favoritesSlice.map((favId) => productsSlice.entities[favId]);
  }
);

export const selectFavoriteItemsCount = createSelector(
  (state) => state.favorites,
  (favorites) => favorites.length
);
