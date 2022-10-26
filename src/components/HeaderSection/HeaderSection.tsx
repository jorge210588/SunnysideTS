import React from "react";
import NavBar from "./NavBar/NavBar";
import "./HeaderSection.scss";
import arrowIcon from "../../images/icon-arrow-down.svg";

const HeaderSection = () => {
  return (
    <header className="header">
      <NavBar />
      <section className="sectionTitle">WE ARE CREATIVES</section>
      <div className="divArrown">
        <img className="arrowIcon" src={arrowIcon} alt="arrow"/>
      </div>
    </header>
  );
};

export default HeaderSection;
