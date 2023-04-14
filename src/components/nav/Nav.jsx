import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { AiFillContacts } from "react-icons/ai";
import { BsBookFill } from "react-icons/bs";

const Nav = () => {
  return (
    <nav>
      <a href="#header">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <FaUserCircle />
      </a>
      <a href="#experience">
        <BsBookFill />
      </a>
      <a href="#contact">
        <AiFillContacts />
      </a>
    </nav>
  );
};

export default Nav;
