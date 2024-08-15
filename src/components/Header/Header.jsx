import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <NavLink to="/">PopularFilms</NavLink>
        <NavLink to="/search">SearchFilms</NavLink>
    </nav>
   
  )
}

export default Header