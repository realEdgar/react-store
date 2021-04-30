import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Footer.css';

export const Footer = () => {
  return (
    <footer className="Footer">
      <p className="Footer-title" >Made by Edgar Lopez Arroyo</p>
      <p className="Footer-copy">Copy Right @</p>
      <Link to="/">Terms and conditions</Link>
    </footer>
  );
};
