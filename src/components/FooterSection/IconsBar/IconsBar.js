import React from "react";
import facebookIcon from '../../../images/icon-facebook.svg';
import instagramIcon from '../../../images/icon-instagram.svg';
import twitterIcon from '../../../images/icon-twitter.svg';
import pintrestIcon from '../../../images/icon-pinterest.svg';
import './IconsBar.scss'

const IconsBar = () => {
  return (
    <>
      <nav className="iconsBar">
        <ul class="iconsBar-links">
          <li>
            <a href="#">
              <img src={facebookIcon} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagramIcon}/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitterIcon} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={pintrestIcon} />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default IconsBar;
