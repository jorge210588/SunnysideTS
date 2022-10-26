import React from "react";
import FooterBar from "./FooterBar/FooterBar";
import "./FooterSection.scss";
import IconsBar from "./IconsBar/IconsBar";
import logoIcon from "../../images/logo.svg";

const FooterSection = () => {
  return (
    <footer className="footerSection">
      <div className="footerItem">
        <img className="footerLogo" alt="footer" src={logoIcon} />
      </div>
      <FooterBar />
      <IconsBar />
    </footer>
  );
};

export default FooterSection;
