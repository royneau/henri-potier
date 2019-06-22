import React, { Component } from 'react'
import Cart from './Cart';
import Library from './Library';

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
      <div className="App  flex-container">
        <Library books={this.state.books} handleAddToCart={this.handleAddToCart} />
        {Object.entries(this.state.cart).length > 0 && <Cart cart={this.state.cart} />}
      </div>
    )
  }
}

export default App;
