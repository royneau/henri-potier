import React, { Component } from 'react'
import Book from './Book';
import CartItem from './CartItem';

import './App.css'

class App extends Component {

  state = {
    books: [],
    cart: {}
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

  handleAddToCart = (book) => {
    const cart = this.state.cart
    if (book.isbn in this.state.cart) {
      cart[book.isbn].amount += 1
    } else {
      cart[book.isbn] = {
        title: book.title,
        price: book.price,
        cover: book.cover,
        amount: 1,
      }
    }
    this.setState({
      cart: cart,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>La bibliothèque d'Henri Potier</h1>
        <ul>
          {this.state.books.map(book =>
            <li key={book.isbn}>
              <Book book={book} onClick={this.handleAddToCart} />
            </li>
          )}
        </ul>
        <h1>Mon panier</h1>
        <ul>
          {Object.keys(this.state.cart).map(key =>
            <li key={key}>
              <CartItem item={this.state.cart[key]} />
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default App;
