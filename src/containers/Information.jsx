import React, { useRef, useContext} from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context/AppContext';

import '../styles/components/Information.css';

export const Information = () => {
  const {state,addToBuyer} = useContext(AppContext);
  const form = useRef(null);
  const { cart } = state;

  function handleSubmit() {
    const information = new FormData(form.current);
    console.log(form.current);
    const buyer = {
      "name": information.get('name'),
      "email": information.get('email'),
      "address": information.get('address'),
      "apto": information.get('apto'),
      "city": information.get('city'),
      "country": information.get('country'),
      "state": information.get('state'),
      "cp": information.get('cp'),
      "phone": information.get('phone'),
    };

    addToBuyer(buyer);
    
  }

  return (
    <section className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Contact Information</h2>
        </div>
        <div className="Information-form">
          <form ref={form} >
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Email" name="email" />
            <input type="text" placeholder="Address" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="City" name="city" />
            <input type="text" placeholder="Country" name="country" />
            <input type="text" placeholder="State" name="state" />
            <input type="text" placeholder="Postal Code" name="cp" />
            <input type="text" placeholder="Phone Number" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Back</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>Pay</button>
          </div>
        </div>        
      </div>
      <div className="Information-sidebar">
        <h3>Carry:</h3>
        {cart.map(item => {
          return (
            <div className="Information-item" key={item.id}>
              <div className="Information-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          );
        })}          
      </div>
    </section>
  );
};
