import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context/AppContext';

import '../styles/components/Checkout.css';

export const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product);
  }

  const handleSumTotal = () => {
    const reducer = (acumulator, currenValue) => acumulator + currenValue.price;
    const sum = cart.reduce(reducer, 0);

    return sum;
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>List:</h3> : <h3>Empty List</h3>}
        {cart.map((item) => {
          return (
            <div className="Checkout-item" key={item.id} >
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
              <button type="button" onClick={ handleRemove(item) }>
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          );
        })}
        
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio total: $${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continue Buying</button>
          </Link>
        </div>
      )}
    </div>
  );
};
