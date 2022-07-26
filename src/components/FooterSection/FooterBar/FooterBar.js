import React from "react";
import "./FooterBar.scss";

const FooterBar = () => {
  return (
    <>
      <nav className="footerBar">
        <ul class="footerBar-links">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default FooterBar;
