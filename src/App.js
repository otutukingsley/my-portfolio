import { GlobalStyle } from './components/themes/styles'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/themes/colors'
import Navbar from './components/layouts/Navbar'
import Myintro from './components/Myintro'
import About from './components/portfolio/About'
import Skills from './components/portfolio/Skills'
import Projects from './components/portfolio/Projects'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Myintro />
      <About />
      <Skills />
      <Projects />
    </ThemeProvider>
  )
}

export default App
