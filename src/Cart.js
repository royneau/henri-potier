import React from 'react'
import CartItem from './CartItem';

function Cart({ cart }) {
  return (
    <div className="Cart">
      <h1>Mon panier</h1>
      <ul>
        {Object.keys(cart).map(key =>
          <li key={key}>
            <CartItem item={cart[key]} />
          </li>
        )}
      </ul>
    </div>
  );
}

export default Cart