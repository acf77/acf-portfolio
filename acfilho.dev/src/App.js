import React from "react";

import "./App.css";
import heroImage from "./assets/hero-mockup.png";

function App() {
  return (
    <body>
      <div class="flex-hero-container">
        <div class="flex-left">
          <h2>Hi there, I'm Antonio Carlos</h2>
          <h1>
            Coding your business
            <br />
            whatever the screen size
          </h1>

          <button class="button">Get in touch</button>
        </div>
        <div class="flex-right">
          <img src={heroImage} class="heroImage" />
        </div>
      </div>
    </body>
  );
}

export default App;
