import React from "react";
import "./NavBar.scss";
import logoIcon from "../../../images/logo.svg";
import menuImage from "../../../images/icon-hamburger.svg";

const NavBar = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const activeClass = "active";

  return (
    <>
      <nav className="navBar">
        <div className="heading">
          <img src={logoIcon} />
        </div>

        <ul class="navBar-links">
          <li>
            <a
              className={activeTab === 1 ? activeClass : ""}
              href="#"
              onClick={() => {
                setActiveTab(1);
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              className={activeTab === 2 ? activeClass : ""}
              href="#"
              onClick={() => {
                setActiveTab(2);
              }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              className={activeTab === 3 ? activeClass : ""}
              href="#"
              onClick={() => {
                setActiveTab(3);
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={activeTab === 4 ? activeClass : ""}
              href="#"
              onClick={() => {
                setActiveTab(4);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
        <img className='menuImage' src={menuImage}/>
      </nav>
    </>
  );
};

export default NavBar;
