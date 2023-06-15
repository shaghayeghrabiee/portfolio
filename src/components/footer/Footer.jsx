import React from "react";
import './footer.css';
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <section>
      <footer>
        <ul className="permalinks">
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#experience">experience</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
        <div className="footer_socials">
          <a href="www.instagram.com">
            <AiFillInstagram />
          </a>
          <a href="www.github.com">
            <AiFillGithub />
          </a>
          <a href="www.linkedin.com">
            <AiFillLinkedin />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
