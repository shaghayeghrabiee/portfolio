import React from "react";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { AiFillContacts } from "react-icons/ai";
import { BsBookFill } from "react-icons/bs";
import "./nav.css";
const Nav = () => {
  const [active, setActive] = useState("#header");
  return (
    <nav>
      <a
        href="#header"
        title="Home"
        onClick={() => setActive("#header")}
        className={active === "#header" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        title="About"
        className={active === "#about" ? "active" : ""}
        onClick={() => setActive("#about")}
      >
        <FaUserCircle />
      </a>
      <a
        href="#experience"
        title="Experience"
        className={active === "#experience" ? "active" : ""}
        onClick={() => setActive("#experience")}
      >
        <BsBookFill />
      </a>
      <a
        href="#contact"
        title="Contact"
        className={active === "#contact" ? "active" : ""}
        onClick={() => setActive("#contact")}
      >
        <AiFillContacts />
      </a>
    </nav>
  );
};

export default Nav;
