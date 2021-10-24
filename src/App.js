import React, { Fragment, useState, useCallback } from 'react'
import { GlobalStyle } from './components/themes/styles'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/themes/colors'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import MobileNav from './components/layouts/MobileNav'
import Myintro from './components/Myintro'
import About from './components/portfolio/About'
import Projects from './components/portfolio/Projects'
import Contact from './components/portfolio/Contact'
import Main from './components/layouts/Main'
import PortfolioState from './components/context/portfolio/PortfolioStates'

const App = () => {
  const [menu, setMenu] = useState(false)
  const [active, setActiveClass] = useState(1)

  const handleMenu = useCallback(() => setMenu((menu) => !menu), [])

  return (
    <PortfolioState>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
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
              <Route
                exact
                path="/resume"
                render={() => (
                  <Fragment>
                    <Projects />
                  </Fragment>
                )}
              />
            </Switch>
          </Main>
          {/* <Skills /> */}
          {/* <Projects /> */}
        </ThemeProvider>
      </Router>
    </PortfolioState>
  )
}

export default App
