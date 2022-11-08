import React, { useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoIosAdd } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductById } from '../store/products/selectors';

const ProductItem = ({ productId }) => {
  const item = useSelector(selectProductById(productId));
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Product Item changed', productId);
  });

  const onFavorite = (id) => {
    dispatch({
      type: 'favorites/ADD_FAVORITE',
      payload: id,
    });
  };
  const addToCart = (id) => {
    console.log('Adding product to cart', id);
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {item.title.slice(0, 30)}
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
