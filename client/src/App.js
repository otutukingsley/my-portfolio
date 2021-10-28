import React from 'react'
import { GlobalStyle } from './components/themes/styles'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/themes/colors'
import PortfolioState from './components/context/portfolio/PortfolioStates'
import MainPage from './components/pages/mainpage/MainPage'


const App = () => {
  return (
    <PortfolioState>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainPage />
      </ThemeProvider>
    </PortfolioState>
  )
}

export default App
