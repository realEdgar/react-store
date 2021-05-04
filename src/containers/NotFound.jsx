import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/NotFoundPage.css'

export const NotFound = () => {
  return (
    <div className="NotFoundPage">
      <h2 className="NotFoundPage-title">Something went wrong with this page:</h2>
      <Link to="/">
        Go Home Back
      </Link>
    </div>
  );
};
