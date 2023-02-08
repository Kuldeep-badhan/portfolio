import React from "react";

import { SlBadge } from "react-icons/sl";
import { AiOutlineFolderOpen } from "react-icons/ai";

import myBlueImg from "../../assets/myBlueImage.jpg";
import "./About.scss";
const About = () => {
  return (
    <div id="about">
      <div className="about">
        <p>Get To Know</p>
        <h2>About Me</h2>
        <div className="about__container">
          <div className="about__container--left">
            <div className="background">
              <img src={myBlueImg} alt="developer image" />
            </div>
          </div>
          <div className="about__container--right">
            <div className="about__container--right--cards">
              <div className="card">
                <span className="card__icon">
                  <SlBadge />
                </span>
                <p className="card__tag">Experience</p>
                <small className="card__desc">11+ Months Experience</small>
              </div>
              <div className="card">
                <span className="card__icon">
                  <AiOutlineFolderOpen />
                </span>
                <p className="card__tag">Projects</p>
                <small className="card__desc">10+ Completed</small>
              </div>
            </div>
            <div className="about__container--right--desc">
              I am a tech enthusiast really interested in software development.
              I have been doing the web development for more than 11 months now
              and it has been a great experience. I've learnt the popular MERN
              stack. I have also made some full stack projects. I look forward
              to work with a company where I can learn and grow my development
              skills.
            </div>
            <div className="about__container--right--btn">
              <a href="#contact">
                <button>Let's Talk </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
