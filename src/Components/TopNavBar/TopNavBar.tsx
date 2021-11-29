import React, { useEffect, useState } from "react";
//@ts-ignore
import { Link, animateScroll as scroll } from "react-scroll";

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
        <Link
          class="active"
          to={getInTouchLink}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Get in touch
        </Link>
        <a href={projectsLink}>Projects</a>
        <a href={aboutLink}>About</a>
      </div>
    </div>
  );
}
