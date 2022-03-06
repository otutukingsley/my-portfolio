import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { MobileMenu } from "./layoutStyles/MobileMenuStyle"

const MobileNav = ({
  menuShow,
  handleMenu,
  active,
  setActiveClass,
  setMenu,
}) => {
  const outsideRef = useRef()
  useEffect(() => {
    const handleMenuHide = () => {
      handleMenu()
    }
    const list = document.getElementById("list")
    const links = list.getElementsByTagName("a")
    Array.from(links).forEach((link) =>
      link.addEventListener("click", handleMenuHide)
    )
    return () => {
      Array.from(links).forEach((link) =>
        link.removeEventListener("click", () => handleMenuHide)
      )
    }
  }, [handleMenu])

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuShow) {
        if (outsideRef.current && !outsideRef.current.contains(e.target)) {
          handleMenu()
        }
      }
    }
    document
      .getElementById("main")
      .addEventListener("mousedown", handleOutsideClick)

    return () => {
      document
        .getElementById("main")
        .removeEventListener("mousedown", handleOutsideClick)
    }
  })

  return (
    <MobileMenu menu={menuShow}>
      <div className="mobile-ul" id="list" ref={outsideRef}>
        <div className="mobile-img-container">
          <img src="/images/indblack.jpeg" alt="Otutu" className="mobile-img" />
        </div>
        <ul className="mobile-list">
          <li onClick={() => setActiveClass(1)}>
            <Link
              to="/"
              className={`mobile-links ${
                active === 1 ? "active-mobile" : "inactive"
              }`}
            >
              Home
            </Link>
          </li>
          <li onClick={() => setActiveClass(2)}>
            <Link
              to="/about"
              className={`mobile-links ${
                active === 2 ? "active-mobile" : "inactive"
              }`}
            >
              About
            </Link>
          </li>
          <li onClick={() => setActiveClass(3)}>
            <Link
              to="/projects"
              className={`mobile-links ${
                active === 3 ? "active-mobile" : "inactive"
              }`}
            >
              Portfolio
            </Link>
          </li>
          <li onClick={() => setActiveClass(4)}>
            <Link
              to="/contact"
              className={`mobile-links ${
                active === 4 ? "active-mobile" : "inactive"
              }`}
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
