import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <main className="Home">
      <header className="Header-Home">
        <h1 className="Header-Title">Edgar Lopez Arroyo</h1>
        <nav className="Header-Nav">
          <ul className="Header-list">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/checkout">CHECKOUT</Link>
            </li>
            <li>
              <Link to="/checkout/information">CHECKOUT/INFORMATION</Link>
            </li>
            <li>
              <Link to="/checkout/payment">CHECKOUT/PAYMENT</Link>
            </li>
            <li>
              <Link to="/checkout/success">CHECKOUT/SUCCESS</Link>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
};
