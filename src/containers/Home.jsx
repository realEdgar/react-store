import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Products } from '../components/Products';

import initialState from '../initialState';

export const Home = () => {
  return <Products products={initialState.products} />;
};
