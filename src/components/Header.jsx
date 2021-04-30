import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <Link to="/" >
        <img src="" alt="Logo of the Store" />
      </Link>
      <h1>Super Store</h1>
    </header>
  );
};
