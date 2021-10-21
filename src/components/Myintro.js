import React from 'react'
import { Container, Intro } from './themes/styles'

const Myintro = () => {
  return (
    <Intro>
      <Container>
        <div className="intro-desc">
          <h1 className="intro-title">Otutu Kingsley</h1>
          <h3 className="sub-title">
            A passionate <strong>Frontend</strong> <strong>Web</strong>{' '}
            <strong>Developer,</strong> who is committed to tansforming complex UI's into web components.
          </h3>
        </div>
        {/* <button className="btn btn-primary btn-cap btn-bold more">
          Let me tell you more
        </button> */}
      </Container>
    </Intro>
  )
}

export default Myintro
