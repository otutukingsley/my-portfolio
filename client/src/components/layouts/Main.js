import React from 'react'
import { MainBg } from './layoutStyles/MainBg'

const Main = ({ children }) => {
    return (
        <MainBg children={children}/>
    )
}

export default Main
