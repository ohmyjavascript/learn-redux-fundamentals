import { createSelector } from 'reselect';

export const selectProductIds = createSelector(
  (state) => state.products,
  (products) => products.products.map((prod) => prod.id)
);

export const selectProductById = (id) => {
  return createSelector(
    (state) => state.products,
    (products) => products.products.find((prod) => prod.id === id)
  );
};
