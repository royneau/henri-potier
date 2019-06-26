import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="mbm" role="navigation" aria-label="Menu principal">
      <Link to="/" >Tous les livres</Link>
      &nbsp;|&nbsp;
      <Link to="/cart">Mon panier</Link>
    </nav>
  )
}

export default Nav
