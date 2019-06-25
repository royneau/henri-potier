import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

function Library({ books, handleAddToCart, children }) {
  return (
    <main role="main" className="Library  w66  small-w100  tiny-w100  pas">
      <h1>La bibliothèque d'Henri&nbsp;Potier</h1>
      {children}
      <ul className="is-unstyled  grid-2 has-gutter">
        {books.map((book) =>
          <li key={book.isbn}>
            <Book book={book} handleAddToCart={handleAddToCart} />
          </li>
        )}
      </ul>
    </main>
  )
}

Library.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
}

export default Library
