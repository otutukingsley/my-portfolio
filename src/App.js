import { GlobalStyle } from './components/themes/styles'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/themes/colors'
import Navbar from './components/layouts/Navbar'
import Myintro from './components/Myintro'
import About from './components/portfolio/About'
import Skills from './components/portfolio/Skills'
import Projects from './components/portfolio/Projects'
import PortfolioState from './components/context/portfolio/PortfolioStates'

const App = () => {
  return (
    <PortfolioState>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Myintro />
        <About />
        <Skills />
        <Projects />
      </ThemeProvider>
    </PortfolioState>
  )
}

export default App
