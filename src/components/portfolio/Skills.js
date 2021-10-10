import React from 'react'
import { SkillsSection, Container } from '../themes/styles'

const Skills = () => {
  return (
    <SkillsSection>
      <Container>
        <h1 className="skills-header">My Top Skills</h1>
        <div className="skills-wrapper">
          <div className="first-set">
            <img
              src="/images/icons8-html-5.svg"
              alt="HTML"
              className="icon icon-card"
            />
            <img
              src="/images/icons8-css3.svg"
              alt="CSS"
              className="icon icon-card"
            />
            <img
              src="/images/icons8-javascript.svg"
              alt="JavaScript"
              className="icon icon-card"
            />
          </div>
          <div className="second-set">
            <img
              src="/images/icons8-bootstrap.svg"
              alt="HTML"
              className="icon icon-card"
            />
            <img
              src="/images/icons8-react-native.svg"
              alt="CSS"
              className="icon icon-card"
            />
            <img
              src="/images/icons8-git.svg"
              alt="JavaScript"
              className="icon icon-card"
            />
          </div>
        </div>
      </Container>
    </SkillsSection>
  )
}

export default Skills
