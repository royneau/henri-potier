import React from 'react'

import './Book.css'

function Book({ book, handleAddToCart }) {
  return (
    <div className="Book  media  mbm">
      <img className="Book__cover  media-figure  w25" src={book.cover} alt="" />
      <div className="Book__content  media-content">
        {book.title}<br />
        {book.price}&nbsp;€<br />
        <button type="button" onClick={() => handleAddToCart(book)}>Acheter</button>
      </div>
    </div>
  )
}

export default Book