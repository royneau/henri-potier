import React from 'react'

function CartItem({ item }) {
  return (
    <div className="CartItem">
      {item.title} {item.amount} x {item.price}
    </div>
  );
}

export default CartItem