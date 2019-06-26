import './Nav.css'

import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav({ cartItemAmount }) {
  return (
    <nav className="mbm" role="navigation" aria-label="Menu principal">
      <NavLink className="NavLink" exact={true} activeClassName="NavLink--is-active" to="/" >
        Tous les livres
      </NavLink>
      &nbsp;|&nbsp;
      <NavLink className="NavLink" exact={true} activeClassName="NavLink--is-active" to="/cart">
        Mon panier ({cartItemAmount})
      </NavLink>
    </nav>
  )
}

export default Nav
