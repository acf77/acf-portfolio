import React from "react";
import AboutSlider from "./Components/AboutSlider";

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
      <div class="wrapper">
        <div class="flex-hero-container">
          <div class="flex-left">
            <h2>Hi there, I'm Antonio Carlos</h2>
            <h1>
              Coding your business
              <br />
              whatever the screen size
            </h1>

            <div class="hero-button-icons-flex">
              <button class="button">Get in touch</button>
              <img
                src={Github}
                class="icon-github"
                onClick={() => githubLink()}
              />
              <img
                src={Linkedin}
                class="icon-linkedin"
                onClick={() => linkedinLink()}
              />
            </div>
          </div>
          <div class="flex-right">
            <img src={heroImage} class="heroImage" />
          </div>
        </div>
        <div class="AboutSlider">
          <AboutSlider />
        </div>
      </div>
    </body>
  );
}

export default App;
