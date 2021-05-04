import React from 'react';

export const Product = ({ product, handleAddToCart }) => {
  return (
    <article className="Products-item">
      <img src={product.image} alt={product.title} />
      <div className="Products-item-info">
        <h2>
          {product.title}
          <span>: ${product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>
        Buy
      </button>
    </article>
  );
};
