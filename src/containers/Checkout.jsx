import React from 'react';

import '../styles/components/Checkout.css';

export const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de pedidos:</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>Item Name:</h4>
            <span>$10</span>
          </div>
          <button type="button" >Remove</button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio total: $10</h3>
        <button type="button">Continue Pedido</button>
      </div>
    </div>
  );
};
