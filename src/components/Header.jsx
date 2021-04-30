import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="Header">
      <Link to="/" >
        <img src="" alt="Logo of the Store" />
      </Link>
      <h1 className="Header-title" >Super Store</h1>
      <div className="Header-checkout">Checkout</div>
    </header>
  );
};
