import React from 'react'

function Book({ book, handleAddToCart }) {
  return (
    <div className="Book">
      {book.title}
      <button type="button" onClick={() => handleAddToCart(book)}>Ajouter au panier</button>
    </div>
  )
}

export default Book