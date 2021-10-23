import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MobileMenu } from '../themes/styles'

const MobileNav = ({ menuShow, handleMenu }) => {


  const handleMenuHide = () => {
    handleMenu()
  }

  useEffect(() => {
    const list = document.getElementById('list');
    const links = list.getElementsByTagName('li');
    console.log('Effect')
    Array.from(links).forEach((link) =>
      link.addEventListener('click', handleMenuHide),
    )

    return () => {
      Array.from(links).forEach((link) =>
        link.addEventListener('click', () => handleMenuHide),
      )
    }
    //eslint-disable-next-line
  }, [])

  return (
    <MobileMenu menu={menuShow}>
      <div className="mobile-ul" id="list">
        <ul className="mobile-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </MobileMenu>
  )
}

export default MobileNav

