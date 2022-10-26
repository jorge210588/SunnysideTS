import React from "react";
import "./FooterBar.scss";

const FooterBar = () => {
  return (
    <>
      <nav className="footerBar">
        <ul className="footerBar-links">
          <li>
            <a href="https://www.google.com">About</a>
          </li>
          <li>
            <a href="https://www.google.com">Services</a>
          </li>
          <li>
            <a href="https://www.google.com">Projects</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default FooterBar;
