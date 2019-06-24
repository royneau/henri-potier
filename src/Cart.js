import './Cart.css'

import React, { Component } from 'react'
import CartItem from './CartItem';

class Cart extends Component {

  state = {
    totalPrice: 0,
    bestOffer: 0,
  }

  componentDidMount() {
    this.calculatePrice(this.props.cart)
  }

  componentWillReceiveProps({ cart }) {
    this.calculatePrice(cart)
  }

  calculatePrice(cart) {
    /* calculate the total price */
    var totalPrice = 0
    Object.keys(cart).map(key => {
      const item = cart[key]
      totalPrice += (item.amount * item.price)
    })
    this.setState({ totalPrice })

    /* calculate the best offer */
    fetch(`http://henri-potier.xebia.fr/books/${Object.keys(cart).join()}/commercialOffers`)
      .then((response) => {
        return response.json()
      })
      .then((myJson) => {
        const bestOffer = this.calculatebestOffer(totalPrice, myJson.offers)
        this.setState({ bestOffer })
      })
  }

  calculatebestOffer(price, offers) {
    const proposedOffers = []
    offers.forEach(offer => {
      if (offer.type === 'percentage') {
        proposedOffers.push(price - (price * offer.value / 100))
      } else if (offer.type === 'minus') {
        proposedOffers.push(price - offer.value)
      }
      else if (offer.type === 'slice') {
        const slices = Math.floor(price / offer.sliceValue)
        proposedOffers.push(price - slices * offer.value)
      }
    })
    return Math.min(...proposedOffers)
  }

  render() {
    return (
      <section className="Cart  item-fluid  pas">
        <h1>Mon panier</h1>
        <ul className="Cart__list  is-unstyled">
          {Object.keys(this.props.cart).map(key =>
            <li key={key}>
              <CartItem item={this.props.cart[key]} />
            </li>
          )}
        </ul>
        <div className="u-txt-right">
          Total : {this.state.totalPrice}&nbsp;€
        </div>
        <div className="u-txt-center  mts">
          <button className="btn--primary">Payez  {this.state.bestOffer}&nbsp;€</button>
          <br />au lieu de <span className="u-txt-line-through">{this.state.totalPrice}&nbsp;€</span>
        </div>
      </section>
    )
  }
}

export default Cart