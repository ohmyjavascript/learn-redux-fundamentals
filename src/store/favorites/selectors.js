import { createSelector } from 'reselect';

export const selectFavorites = createSelector(
  (state) => state.products,
  (state) => state.favorites,
  (productsSlice, favoritesSlice) => {
    const productsMap = {};
    productsSlice.products.map((prod) => {
      return (productsMap[prod.id] = prod);
    });
    return favoritesSlice.map((id) => productsMap[id]);
  }
);

export const selectFavoriteItemsCount = createSelector(
  (state) => state.favorites,
  (favorites) => favorites.length
);
