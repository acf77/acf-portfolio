import React, { useState, useEffect } from "react";
//@ts-ignore
import Fade from "react-reveal/Fade";

import AboutSlider from "./Components/AboutSlider/AboutSlider";
import { TopNavBar } from "./Components/TopNavBar/TopNavBar";

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

  function rgLink() {
    const link =
      "https://www.researchgate.net/profile/Antonio-Silva-Filho-6/research";
    window.open(link);
  }

  function handleEmail() {
    const link = "mailto:acfilho@acfilho.dev";
    window.open(link);
  }

  return (
    <body>
      <TopNavBar
        logoLink="#flex-hero-container"
        getInTouchLink="#button"
        projectsLink=".AboutSlider"
        aboutLink="#about-me"
      />

      <div className="flex-hero-container">
        <div className="flex-left">
          <h2 className="hero-subtitle">
            Hi there, I'm Antonio Carlos Filho 👨🏾‍💻
          </h2>

          <h1 className="hero-title">
            Coding your business
            <br />
            whatever the screen size
          </h1>

          <div className="hero-button-icons-flex">
            <button className="button" onClick={handleEmail}>
              Get in touch
            </button>
            <img
              alt="github-icon"
              src={Github}
              className="icon-github"
              onClick={githubLink}
            />
            <img
              alt="linkedin-icon"
              src={Linkedin}
              className="icon-linkedin"
              onClick={linkedinLink}
            />
            <img
              alt="rg-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/ResearchGate_icon_SVG.svg"
              className="icon-rg"
              onClick={rgLink}
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
