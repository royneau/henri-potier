import React from 'react'
import Book from './Book';

function Library({ books, handleAddToCart }) {
  return (
    <main role="main" className="Library  w66  small-w100  tiny-w100  pas">
      <h1>La bibliothèque d'Henri&nbsp;Potier</h1>
      <ul className="is-unstyled  grid-2 has-gutter">
        {books.map(book =>
          <li key={book.isbn}>
            <Book book={book} handleAddToCart={handleAddToCart} />
          </li>
        )}
      </ul>
    </main>
  )
}

export default Library