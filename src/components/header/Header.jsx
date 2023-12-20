import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../asset/11.JPG";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <div>
      <header>
        <div id="header" className="containar header-container">
          <h5>Hello I'm</h5>
          <h1>Shaghayegh Rabieikenari</h1>
          <h5 className="text-light">Frontend Developer</h5>
          <CTA />
          <HeaderSocial />
          <div className="image-me">
            <img src={ME} alt="me" />
          </div>

          <a href="#about" className="scroll_down">
            Scroll down
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
