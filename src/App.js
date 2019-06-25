import './App.css'

import React, { Component } from 'react'
import Cart from './Cart'
import Library from './Library'
import BooksFilter from './BooksFilter'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredBooks: [],
      cart: {},
    }
    this.books = []
    this.filter = React.createRef();
  }

  componentDidMount() {
    fetch('http://henri-potier.xebia.fr/books')
      .then((response) => {
        return response.json()
      })
      .then((myJson) => {
        this.books = myJson
        this.setState({ filteredBooks: myJson })
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

  handleFilter = () => {
    const filter = this.filter.current.value

    var regex = RegExp(`.*${filter}.*`, 'i')

    const books = this.books.filter((book) => {
      return regex.test(book.title)
        || regex.test(book.synopsis.join())
    })

    this.setState({
      filteredBooks: books,
    })
  }

  render() {
    return (
      <div className="App  flex-container">
        <Library books={this.state.filteredBooks} handleAddToCart={this.handleAddToCart}>
          <BooksFilter filterRef={this.filter} handleFilter={this.handleFilter} />
        </Library>
        {Object.entries(this.state.cart).length > 0 && <Cart cart={this.state.cart} />}
      </div>
    )
  }
}

export default App
