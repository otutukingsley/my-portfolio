import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MobileMenu } from './layoutStyles/MobileMenuStyle'

const MobileNav = ({ menuShow, handleMenu, active, setActiveClass}) => {
  useEffect(() => {
    const handleMenuHide = () => {
      handleMenu()
    }
    const list = document.getElementById('list')
    const links = list.getElementsByTagName('a')
    Array.from(links).forEach((link) =>
      link.addEventListener('click', handleMenuHide),
    )

    return () => {
      Array.from(links).forEach((link) =>
        link.addEventListener('click', () => handleMenuHide),
      )
    }
  }, [handleMenu])

  return (
    <MobileMenu menu={menuShow}>
      <div className="mobile-ul" id="list">
        <ul className="mobile-list">
          <li onClick={() => setActiveClass(1)}>
            <Link
              to="/"
              className={`mobile-links ${active === 1 ? 'active-mobile' : 'inactive'}`}
            >
              Home
            </Link>
          </li>
          <li onClick={() => setActiveClass(2)}>
            <Link
              to="/about"
              className={`mobile-links ${active === 2 ? 'active-mobile' : 'inactive'}`}
            >
              About
            </Link>
          </li>
          <li onClick={() => setActiveClass(3)}>
            <Link
              to="/projects"
              className={`mobile-links ${active === 3 ? 'active-mobile' : 'inactive'}`}
            >
              Portfolio
            </Link>
          </li>
          <li onClick={() => setActiveClass(4)}>
            <Link
              to="/contact"
              className={`mobile-links ${active === 4 ? 'active-mobile' : 'inactive'}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </MobileMenu>
  )
}

export default MobileNav
