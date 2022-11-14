import React from 'react';
import FavoriteItem from 'components/FavoriteItem';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'store/favorites/selectors';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const favoriteItems = useSelector(selectFavorites);

  if (favoriteItems.length === 0) {
    return (
      <div className="alert alert-dismissable alert-info">
        <strong>Alert!</strong> Please start adding items as favorites
        <Link to="/"> from here </Link>
      </div>
    );
  }
  return (
    <ul className="list-group">
      {favoriteItems.map((item) => (
        <FavoriteItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Favorites;
