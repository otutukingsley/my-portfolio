import React from 'react'
import { AboutSection, Container } from '../themes/styles'

const About = () => {
  return (
    <AboutSection>
      <Container>
        <h1 className="about-title">Who Am I</h1>
        <p className="about-lead">Let's tell you about myself.</p>
        <p className="about-text">
          A qualified Frontend Web Developer, who is a determined, easy-going
          and a full of life individual are the words that define me best. For
          the past, several months, I have refined my technical and
          interpersonal skills by learning cutting-edge technologies through
          challenging educational and adventurous endeavours. <br /> I am
          proficient in HTML, CSS and JavaScript, and also in popular frontend
          frameworks such as ReactJs. I have significant experience on the
          backend side of the web as I have worked with REST API’s, ExpressJs,
          NodeJs and a non-relational database MongoDB. <br /> I am a critical
          thinker and dedicated to learning more, so you will always find me
          collaborating and asking questions to find solutions to complex
          problems, adapting quickly to new situations, and working well with
          teams. I can learn new products, processes, and technologies while
          using my ability to translate complicated technical solutions to any
          audience.
        </p>
      </Container>
    </AboutSection>
  )
}

export default About
