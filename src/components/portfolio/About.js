import React from 'react'
import { AboutSection, Container } from '../themes/styles'
import { Link } from 'react-router-dom'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'

const About = () => {
  return (
    <AboutSection>
      <div className="border-line"></div>
      <div className="box content-box">
        <div className="header-content">
          <h1>About Me</h1>
          <p>Easy going and a full of life individual</p>
        </div>
        <div className="about-content grid-3">
          <div className="image-container"></div>
          <div className="about-text">
            <h3>Who am I.</h3>
            <p>
              A qualified Frontend Web Developer, who is a determined,
              easy-going and a full of life individual are the words that define
              me best. For the past, several months, I have refined my technical
              and interpersonal skills by learning cutting-edge technologies
              through challenging educational and adventurous endeavours. <br />
              <br />I am a critical thinker and dedicated to learning more, so
              you will always find me collaborating and asking questions to find
              solutions to complex problems, adapting quickly to new situations,
              and working well with teams. I can learn new products, processes,
              and technologies while using my ability to translate complicated
              technical solutions to any audience.
            </p>
          </div>
          <div className="about-info">
            <ul className="infos">
              <li>
                <span className="title">Age</span>{' '}
                <span className="value">22</span>
              </li>
              <li>
                <span className="title">Residence</span>{' '}
                <span className="value">Nigeria</span>{' '}
              </li>
              <li>
                <span className="title">e-mail</span>{' '}
                <span className="value email">chineduotutu3@gmail.com</span>{' '}
              </li>
              <li>
                <span className="title">Hireable</span>{' '}
                <span className="value">Yes</span>
              </li>

              <li className="social-li">
                <span className="title">Socials</span>
                <div className="socials">
                  <span className="github">
                    <Link to="#!">
                      <AiOutlineLinkedin className="social-icon" />
                    </Link>
                  </span>
                  <span className="linkedin">
                    <Link to="#!">
                      <AiOutlineGithub className="social-icon" />
                    </Link>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="skills-container">
          <div className="skills-heading">
            <h3 className="skills-h3">Skills</h3>
          </div>
          <div className="skills-content grid-6">
            <div className="skill-icon">
              <img src="/images/icons8-html-5.svg" alt="html" />
            </div>
            <div className="skill-icon">
              <img src="/images/icons8-css3.svg" alt="css" />
            </div>
            <div className="skill-icon">
              <img src="/images/icons8-javascript.svg" alt="javascript" />
            </div>
            <div className="skill-icon">
              <img src="/images/icons8-react-native.svg" alt="react" />
            </div>
            <div className="skill-icon">
              <img src="/images/icons8-git.svg" alt="git" />
            </div>
            <div className="skill-icon">
              <img src="/images/icons8-bootstrap.svg" alt="bootstrap" />
            </div>
          </div>
        </div>
      </div>
    </AboutSection>
  )
}

export default About
