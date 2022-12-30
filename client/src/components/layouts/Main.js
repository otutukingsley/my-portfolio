import React from 'react'
import { MainBg } from './layoutStyles/MainBg'

const Main = ({ children }) => {
  return (
    <main id="main">
      <MainBg>
        {children}
      </MainBg>
    </main>
  )
}

export default Main
