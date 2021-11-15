import React from "react";
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
      <div>
        <div className="flex-hero-container">
          <div className="flex-left">
            <h2>Hi there, I'm Antonio Carlos 👨🏾‍💻</h2>
            <h1>
              Coding your business
              <br />
              whatever the screen size
            </h1>

            <div className="hero-button-icons-flex">
              <button className="button">Get in touch</button>
              <img
                alt='github-icon'
                src={Github}
                className="icon-github"
                onClick={() => githubLink()}
              />
              <img
                alt='linkedin-icon'
                src={Linkedin}
                className="icon-linkedin"
                onClick={() => linkedinLink()}
              />
            </div>
          </div>
          <div className="flex-right">
            <img alt='hero' src={heroImage} className="heroImage" />
          </div>
        </div>
        <div className="AboutSlider">
          <AboutSlider />
        </div>
      </div>
    </body>
  );
}

export default App;
