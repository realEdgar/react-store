import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <main className="Main" >
      <Header />
      { children }
      <Footer />
    </main>
  );
};
