import React from 'react'
import { Nav } from '../themes/styles'

const Navbar = () => {
  return (
    <Nav>
      <div className="nav-wrapper">
        <h1>Otutu Kingsley C.</h1>
        <ul className="navigation">
          <li>
            <a href="#!" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#!" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#!" className="nav-link">
              Skills
            </a>
          </li>
          <li>
            <a href="#!" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#!" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </Nav>
  )
}

export default Navbar
