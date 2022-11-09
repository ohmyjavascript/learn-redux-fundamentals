import React from 'react';
import FavoriteItem from 'components/FavoriteItem';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const favoriteIds = useSelector((state) => state.favorites);
  const favoriteItems = useSelector((state) => {
    const productsMap = {};
    state.products.products.map((prod) => {
      return (productsMap[prod.id] = prod);
    });
    return favoriteIds.map((id) => productsMap[id]);
  });
  return (
    <ul className="list-group">
      {favoriteItems.map((item) => (
        <FavoriteItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Favorites;
