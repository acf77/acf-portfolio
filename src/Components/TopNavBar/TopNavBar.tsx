import React, { useEffect, useState } from "react";

import "./TopNavBar.css";

interface TopNavBarProps {
  logoLink: string;
  getInTouchLink: string;
  projectsLink: string;
  aboutLink: string;
}

export function TopNavBar({
  logoLink,
  getInTouchLink,
  projectsLink,
  aboutLink,
}: TopNavBarProps) {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setIsShrunk(window.scrollY > 600)
      );
    }
  }, []);

  return (
    <div className={`${isShrunk ? "navbar-small" : "navbar"}`}>
      <a href={logoLink} id="logo">
        acfilho.dev
      </a>
      <div id="navbar-right">
        <a id="active" href={getInTouchLink}>
          Get in touch
        </a>
        <a href={projectsLink}>Projects</a>
        <a href={aboutLink}>About</a>
      </div>
    </div>
  );
}
