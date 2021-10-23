import React from 'react'
import { Nav } from '../themes/styles'
import { Link } from 'react-router-dom'
import { useViewPort } from '../hooks/Viewport'


const Navbar = ({ handleMenu }) => {
  const { width } = useViewPort()
  const breakpoint = 1070

  return (
    <Nav>
      <div className="nav-wrapper">
        <h1 className="nav-heading">Otutu Kingsley</h1>
        {width > breakpoint ? (
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
        ) : (
          <button className="hamburger-btn" onClick={() => handleMenu()}>
            <img src="/images/icon-hamburger.svg" alt="X" />
          </button>
        )}
      </div>
    </Nav>
  )
}

export default Navbar
