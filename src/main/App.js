import './App.css'

import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Cart from '../cart/Cart'
import Library from '../library/Library'
import BooksFilter from '../library/BooksFilter'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredBooks: [],
      cart: {},
      cartItemAmount: 0,
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

    const cartItemAmount = this.state.cartItemAmount + 1

    this.setState({
      cart,
      cartItemAmount,
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
        <Switch>
          <Route exact={true} path="/" render={() =>
            <Library books={this.state.filteredBooks} handleAddToCart={this.handleAddToCart} cartItemAmount={this.state.cartItemAmount}>
              <BooksFilter filterRef={this.filter} handleFilter={this.handleFilter} />
            </Library>
          } />
          <Route exact={true} path="/cart" render={() =>
            <Cart cart={this.state.cart} cartItemAmount={this.state.cartItemAmount} />
          } />
          <Route render={() => <div>404 : Not found</div>} />
        </Switch>
      </div >
    )
  }
}

export default App
