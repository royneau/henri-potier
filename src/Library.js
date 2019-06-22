import React from 'react'
import Book from './Book';

function Library({ books, handleAddToCart }) {
  return (
    <section className="Library  w66  small-w100  tiny-w100  pas">
      <h1>La bibliothèque d'Henri&nbsp;Potier</h1>
      <ul className="is-unstyled  grid-2 has-gutter">
        {books.map(book =>
          <li key={book.isbn}>
            <Book book={book} handleAddToCart={handleAddToCart} />
          </li>
        )}
      </ul>
    </section>
  )
}

export default Library