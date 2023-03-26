import React from "react";
import { Container, Intro } from "./IntroStyle";
import Resume from "../../../documents/ChineduOtutuResume-03-23.pdf";
import {
  AiFillTwitterSquare,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Myintro = () => {
  return (
    <Intro>
      <Container>
        <div className="intro-desc">
          <h1 className="intro-title">Otutu Kingsley</h1>
          <h3 className="sub-title">Software Engineer</h3>

          <div className="home-socials">
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

          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary resume-btn"
          >
            View Resume
          </a>
        </div>
      </Container>
    </Intro>
  );
};

export default Myintro;
