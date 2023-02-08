import React from "react";

import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <h1>KULDEEP</h1>
      <ul>
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>
      <div className="footer__icons">
        <div className="icon__container">
          <a
            href="https://www.facebook.com/profile.php?id=100078282377927"
            target={"blank"}
          >
            <GrFacebookOption className="icon" />
          </a>
        </div>
        <div className="icon__container">
          <a href="https://twitter.com/KuldeepBadhan78" target={"blank"}>
            <AiOutlineTwitter className="icon" />
          </a>
        </div>
        <div className="icon__container">
          <a href="https://www.instagram.com/kuldeepbadhan78/" target={"blank"}>
            <AiFillInstagram className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
