import React, { useState, useCallback, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../../layouts/Navbar'
import MobileNav from '../../layouts/MobileNav'
import Main from '../../layouts/Main'
import Myintro from '../home/Myintro'
import About from '../about/About'
import Projects from '../portfolio/Projects'
import Contact from '../contact/Contact'

const MainPage = () => {
  const [menu, setMenu] = useState(false)
  const [active, setActiveClass] = useState(1)

  const handleMenu = useCallback(() => setMenu((menu) => !menu), [])
  
  return (
    <Router>
      <Navbar
        handleMenu={handleMenu}
        menuShow={menu}
        active={active}
        setActiveClass={setActiveClass}
      />
      <Main>
        <MobileNav
          menuShow={menu}
          handleMenu={handleMenu}
          active={active}
          setActiveClass={setActiveClass}
          setMenu={setMenu}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <Myintro />
              </Fragment>
            )}
          />
          <Route
            exact
            path="/about"
            render={() => (
              <Fragment>
                <About />
              </Fragment>
            )}
          />
          <Route
            exact
            path="/projects"
            render={() => (
              <Fragment>
                <Projects />
              </Fragment>
            )}
          />
          <Route
            exact
            path="/contact"
            render={() => (
              <Fragment>
                <Contact />
              </Fragment>
            )}
          />
        </Switch>
      </Main>
    </Router>
  )
}

export default MainPage
