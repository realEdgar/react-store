import React from 'react';
import { Product } from '../components/Product';

import '../styles/components/Products.css';

export const Products = ({ products }) => {
  return (
    <div className="Products">
      <section className="Products-items">
        {products.map(product => {
          return <Product key={product.id} product={product} />;
        })}
      </section>
    </div>
  );
};
