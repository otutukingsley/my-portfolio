import React from "react";
import { Container, Intro } from "./IntroStyle";
import Resume from "../../../documents/OTUTU-RESUME-2023-01.pdf";

const Myintro = () => {
  return (
    <Intro>
      <Container>
        <div className="intro-desc">
          <h1 className="intro-title">Otutu Kingsley</h1>
          <h3 className="sub-title">Software Engineer</h3>
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
