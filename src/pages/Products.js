import React, { useEffect } from 'react';
import ProductItem from 'components/ProductItem';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from 'store/products/actions';
import {
  selectHasProductCount,
  selectProductIds,
  selectProductIsLoaded,
  selectProductIsLoading,
} from 'store/products/selectors';
import Spinner from 'components/Spinner';

const Products = () => {
  const productIds = useSelector(selectProductIds);
  const isLoading = useSelector(selectProductIsLoading);
  const hasProductCount = useSelector(selectHasProductCount);
  const isLoaded = useSelector(selectProductIsLoaded);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded) {
      dispatch(fetchProducts);
    }
  }, [dispatch, isLoaded]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!hasProductCount) {
    return (
      <div className="alert alert-dismissable alert-info">
        <strong> Alert!</strong> Please start adding products
        <Link to="/new"> from here </Link>
      </div>
    );
  }

  return (
    <div>
      <ul className="list-group">
        {productIds.map((prodId) => (
          <ProductItem key={prodId} productId={prodId} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
