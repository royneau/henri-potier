import React, { Component } from 'react'
import Book from './Book';

import './App.css'

class App extends Component {

  state = {
    books: [],
    cart:[]
  }

  componentDidMount() {
    fetch('http://henri-potier.xebia.fr/books')
    .then((response) => {
      return response.json()
    })
    .then((myJson) => {
      this.setState({ books: myJson })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>La bibliothèque d'Henri Potier</h1>
        <ul>
          {this.state.books.map(book =>
            <li key={book.isbn}>
              <Book book={book} />
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default App;
