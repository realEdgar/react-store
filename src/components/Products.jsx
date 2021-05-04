import React, { useContext } from 'react';
import { Product } from '../components/Product';

import AppContext from '../context/AppContext';

import '../styles/components/Products.css';

export const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = product => () => {
    addToCart( product );
  }

  return (
    <div className="Products">
      <section className="Products-items">
        {products.map((product) => {
          return <Product key={product.id} product={product} handleAddToCart={ handleAddToCart } />;
        })}
      </section>
    </div>
  );
};
