import React from "react";
// icons
import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import myImage from "../../assets/myImage.png";
import "./Header.scss";
const Header = () => {
  return (
    <div id="header">
      <div className="header">
        <span>Hello I'm</span>
        <h1>Kuldeep Badhan</h1>
        <h2>Fullstack Web Developer</h2>
        <div className="header__btns">
          <a href="#portfolio">
            <button className="btn__outline"> Portfolio Projects </button>
          </a>
          <a href="#contact">
            <button className="btn__filled"> Let's Talk </button>
          </a>
        </div>
        <div className="header__image">
          <img src={myImage} alt="developer image" />
        </div>
        <div className="header__social-icons">
          <a
            href="https://www.linkedin.com/in/kuldeep-badhan-945608232/"
            target={"blank"}
          >
            <AiFillLinkedin className="icons" />
          </a>
          <a href="https://github.com/Kuldeep-badhan" target={"blank"}>
            <AiFillGithub className="icons" />
          </a>
          <a href="https://twitter.com/KuldeepBadhan78" target={"blank"}>
            <AiOutlineTwitter className="icons" />
          </a>
          <span className="border__left"></span>
        </div>
        <a href="#contact" className="scroll__down">
          scroll down
        </a>
      </div>
    </div>
  );
};

export default Header;
