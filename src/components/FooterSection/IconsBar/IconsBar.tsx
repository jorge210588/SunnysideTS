import React from "react";
import facebookIcon from '../../../images/icon-facebook.svg';
import instagramIcon from '../../../images/icon-instagram.svg';
import twitterIcon from '../../../images/icon-twitter.svg';
import pinterestIcon from '../../../images/icon-pinterest.svg';
import './IconsBar.scss'

const IconsBar = () => {
  return (
    <>
      <nav className="iconsBar">
        <ul className="iconsBar-links">
          <li>
            <a href="#">
              <img src={facebookIcon} alt="facebook Icon"/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagramIcon} alt="Instagram Icon"/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitterIcon} alt="Twitter Icon"/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={pinterestIcon} alt="Pinterest Icon"/>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default IconsBar;
