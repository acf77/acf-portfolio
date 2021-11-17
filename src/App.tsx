import React from "react";
import Fade from "react-reveal/Fade";

import AboutSlider from "./Components/AboutSlider/AboutSlider";

import "./App.css";

import heroImage from "./assets/hero-mockup.png";
import Github from "./assets/icon-github.svg";
import Linkedin from "./assets/icon-linkedin.svg";

function App() {
  function githubLink() {
    const link = "https://github.com/acf77";
    window.open(link);
  }

  function linkedinLink() {
    const link = "https://www.linkedin.com/in/acfilho/";
    window.open(link);
  }

  return (
    <body>
      <div className="flex-hero-container">
        <div className="flex-left">
          <h2 className="hero-subtitle">Hi there, I'm Antonio Carlos 👨🏾‍💻</h2>

          <h1 className="hero-title">
            Coding your business
            <br />
            whatever the screen size
          </h1>

          <div className="hero-button-icons-flex">
            <button className="button">Get in touch</button>
            <img
              alt="github-icon"
              src={Github}
              className="icon-github"
              onClick={() => githubLink()}
            />
            <img
              alt="linkedin-icon"
              src={Linkedin}
              className="icon-linkedin"
              onClick={() => linkedinLink()}
            />
          </div>
        </div>
        <div className="flex-right">
          <img alt="hero" src={heroImage} className="heroImage" />
        </div>
      </div>

      <div className="AboutSlider">
        <AboutSlider />
      </div>

      <Fade bottom>
        <div className="about-me">
          <div className="about-me-flex-left">
            <img
              alt="profile"
              src="https://avatars.githubusercontent.com/u/61336548?v=4"
            />
          </div>
          <div className="about-me-flex-right">
            <h2 id="about-me-title">About me</h2>
            <h2 className="hero-dev-title">
              Frontend React, React Native developer
            </h2>
            <div className="stack-icons">
              <img
                alt="acf-Js"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
              />
              <img
                alt="acf-Ts"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"
              />
              <img
                alt="acf-React"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
              />
              <img
                alt="acf-HTML"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
              />
              <img
                alt="acf-CSS"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
              />
              <img
                alt="acf-Git"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
              />
            </div>
            <p className="about-me-paragraph">
              I'm a Frontend React and React Native developer from Brazil! I
              love problem-solving and the proccess of building solution from
              scratch. I also have managing experience leading teams from 5-10
              people.
            </p>
          </div>
        </div>
      </Fade>
    </body>
  );
}

export default App;
