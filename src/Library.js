import React from 'react'
import Book from './Book';

function Library({ books, handleAddToCart }) {
  return (
    <div className="Library">
      <h1>La bibliothèque d'Henri Potier</h1>
      <ul>
        {books.map(book =>
          <li key={book.isbn}>
            <Book book={book} handleAddToCart={handleAddToCart} />
          </li>
        )}
      </ul>
    </div>
  )
}

export default Library