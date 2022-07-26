import React from "react";
import FooterBar from "./FooterBar/FooterBar";
import "./FooterSection.scss";
import IconsBar from "./IconsBar/IconsBar";
import logoIcon from "../../images/logo.svg";

const FooterSection = () => {
  return (
    <footer class="footerSection">
      <div class="footerItem">
        <img className="footerLogo" src={logoIcon} />
      </div>
      <FooterBar />
      <IconsBar />
    </footer>
  );
};

export default FooterSection;
