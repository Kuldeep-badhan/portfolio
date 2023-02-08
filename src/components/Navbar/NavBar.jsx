import React, { useState } from "react";

import { FiHome } from "react-icons/fi";
import { BsPerson, BsBag } from "react-icons/bs";
import { AiOutlinePhone, AiFillBook } from "react-icons/ai";

import "./NavBar.scss";
const NavBar = () => {
  const [active, setActive] = useState("#");
  return (
    <div className="navbar">
      {/* <div className="navbar__icons"> */}
      <a
        href="#"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
      >
        <FiHome className="nav__icon" />{" "}
      </a>

      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <BsPerson className="nav__icon" />{" "}
      </a>

      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active" : ""}
      >
        <AiFillBook className="nav__icon" />{" "}
      </a>

      <a
        href="#portfolio"
        onClick={() => setActive("#portfolio")}
        className={active === "#portfolio" ? "active" : ""}
      >
        <BsBag className="nav__icon" />{" "}
      </a>

      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <AiOutlinePhone className="nav__icon" />{" "}
      </a>
      {/* </div> */}
    </div>
  );
};

export default NavBar;
