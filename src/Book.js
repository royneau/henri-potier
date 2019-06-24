import './Book.css'

import React from 'react'

function Book({ book, handleAddToCart }) {
  return (
    <article className="Book  media  mbm">
      <img className="Book__cover  media-figure  w25" src={book.cover} alt="" />
      <div className="Book__content  media-content">
        <h2 className="h5-like">{book.title}</h2>
        {book.price}&nbsp;€<br />
        <button type="button" onClick={() => handleAddToCart(book)}>Acheter</button>
      </div>
    </article>
  )
}

export default Book