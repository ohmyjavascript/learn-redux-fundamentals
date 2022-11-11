import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoIosAdd } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductById } from 'store/products/selectors';
import { addFavoriteItem } from 'store/favorites';
import { addFavorite } from 'store/products';

const ProductItem = ({ productId }) => {
  const item = useSelector(selectProductById(productId));
  const dispatch = useDispatch();

  const onFavorite = (id) => {
    dispatch(addFavorite(id));
    dispatch(addFavoriteItem(id));
  };
  const addToCart = (id) => {
    console.log('Adding product to cart', id);
  };
  if (!item) {
    return;
  }
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {item.title?.slice(0, 30)}
      <div>
        <button
          onClick={() => onFavorite(item.id)}
          className="btn btn-secondary"
        >
          {item.isFavorite ? (
            <AiFillHeart size={24} />
          ) : (
            <AiOutlineHeart size={24} />
          )}
        </button>
        <button
          onClick={() => addToCart(item.id)}
          className="btn btn-secondary"
        >
          <IoIosAdd size={24} />
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
