import React from 'react'

function CartItem({ item }) {
  return (
    <div className="CartItem  flex-container">
      <span className="w80  prs">{item.title}</span>
      <span className="w20  txtright">{item.amount}&nbsp;x&nbsp;{item.price}&nbsp;€</span>
    </div>
  )
}

export default CartItem
