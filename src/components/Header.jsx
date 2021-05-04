import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context/AppContext'

import '../styles/components/Header.css';

export const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <header className="Header">
      <Link to="/">
        <h1 className="Header-title">Super Store</h1>
      </Link>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 && <output className="Header-alert">{ cart.length }</output>}        
      </div>
    </header>
  );
};
