import React from 'react'
import { Nav } from '../themes/styles'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <Nav>
      <div className="nav-wrapper">
        <h1>Otutu Kingsley</h1>
        <ul className="navigation">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </Nav>
  )
}

export default Navbar
