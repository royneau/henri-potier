import React from 'react'

function Book({book, onClick}) {
  return (
    <div className="Book">
      {book.title}
      <button type="button" onClick={() => onClick(book)}>Ajouter au panier</button>
    </div>
  );
}

export default Book