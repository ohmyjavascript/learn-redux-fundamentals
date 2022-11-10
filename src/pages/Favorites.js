import React from 'react';
import FavoriteItem from 'components/FavoriteItem';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'store/favorites/selectors';

const Favorites = () => {
  const favoriteItems = useSelector(selectFavorites);
  return (
    <ul className="list-group">
      {favoriteItems.map((item) => (
        <FavoriteItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Favorites;
