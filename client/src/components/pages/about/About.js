import React, { useEffect, useState } from "react"
import { AboutSection } from "./AboutStyle"
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiFillTwitterSquare,
} from "react-icons/ai"

const About = () => {
  const [fade, setFade] = useState(false)

  useEffect(() => {
    setFade(true)

    return () => {
      setFade(false)
    }
  }, [])

  return (
    <AboutSection fade={fade}>
      <div className="border-line"></div>
      <div className="box content-box">
        <div className="header-content">
          <h1>About Me</h1>
          <p>Easy going and a full of life individual</p>
        </div>
        <div className="section-content grid-1-2">
          <div className="image-container"></div>
          <div className="a-grid-2">
            <div className="about-text">
              <h3>Who am I.</h3>
              <p>
                A qualified Frontend Web Developer, who is a determined,
                easy-going and a full of life individual are the words that
                define me best. For the past, several months, I have refined my
                technical and interpersonal skills by learning cutting-edge
                technologies through challenging educational and adventurous
                endeavours.
              </p>
              <br />
              <p>
                I have 1+ years of professional Software Development experience,
                working in testing and production environments. Involved in
                building performant, beautiful, reusable and scalable interfaces
                using modern software development tools. Often collaborating
                with team members, bringing a committed attitude, reliability,
                innovation and strong judgement to the table.
              </p>
            </div>
            <div className="about-info">
              <ul className="infos">
                <li>
                  <span className="title">Age</span>{" "}
                  <span className="value">23</span>
                </li>
                <li>
                  <span className="title">Residence</span>{" "}
                  <span className="value">Nigeria</span>{" "}
                </li>
                <li>
                  <span className="title">e-mail</span>{" "}
                  <a
                    href={`mailto: chineduotutu3@gmail.com`}
                    className="value email"
                  >
                    chineduotutu3@gmail.com
                  </a>
                </li>
                <li>
                  <span className="title">Hireable</span>{" "}
                  <span className="value">Yes</span>
                </li>

                <li className="social-li">
                  <span className="title">Socials</span>
                  <div className="socials">
                    <span className="github">
                      <a
                        href="https://github.com/otutukingsley"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiOutlineGithub className="social-icon" />
                      </a>
                    </span>
                    <span className="linkedin">
                      <a
                        href="https://www.linkedin.com/in/otutu-chinedu-2a5b30195/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <AiOutlineLinkedin className="social-icon" />
                      </a>
                    </span>
                    <span className="linkedin">
                      <a
                        href="https://twitter.com/tutuMantutu"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <AiFillTwitterSquare className="social-icon" />
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
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
              <img src="/images/icons8-typescript.svg" alt="typescript" />
            </div>
            <div className="skill-icon">
              <img src="/images/icons8-react-native.svg" alt="react" />
            </div>
            <div className="skill-icon">
              <img src="/images/icons8-redux.svg" alt="redux" />
            </div>
            <div className="skill-icon">
              <img src="/images/icons8-nodejs.svg" alt="nodejs" />
            </div>
            <div className="skill-icon">
              <img src="/images/icons8-mongodb.svg" alt="mongodb" />
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
