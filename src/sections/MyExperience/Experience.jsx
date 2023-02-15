import React from "react";

import { HiBadgeCheck } from "react-icons/hi";
import "./Experience.scss";
const Experience = () => {
  return (
    <div id="experience">
      <div className="experience">
        <p>What skills I have</p>
        <h2>My Experience</h2>
        <div className="experience__container">
          <div className="experience__container--frontend">
            <h2>Frontend Development</h2>
            <div className="experience__container--frontend--skills">
              <div className="skill">
                <span>
                  <HiBadgeCheck className="badge__icon" />
                </span>
                <strong>HTML</strong>
              </div>
              <div className="skill">
                <span>
                  <HiBadgeCheck className="badge__icon" />
                </span>
                <strong>CSS</strong>
              </div>
              <div className="skill">
                <span>
                  <HiBadgeCheck className="badge__icon" />
                </span>
                <strong>JavaScript</strong>
              </div>
              <div className="skill">
                <span>
                  <HiBadgeCheck className="badge__icon" />
                </span>
                <strong>Reactjs</strong>
              </div>
              <div className="skill">
                <span>
                  <HiBadgeCheck className="badge__icon" />
                </span>
                <strong>Scss</strong>
              </div>
              <div className="skill">
                <span>
                  <HiBadgeCheck className="badge__icon" />
                </span>
                <strong>Redux</strong>
              </div>
            </div>
          </div>
          <div className="experience__container--backend">
            <h2>Backend Development</h2>
            <div className="experience__container--backend--skills">
              <div className="skill">
                <span>
                  <HiBadgeCheck className="badge__icon" />
                </span>
                <strong>Nodejs</strong>
              </div>
              <div className="skill">
                <span>
                  <HiBadgeCheck className="badge__icon" />
                </span>
                <strong>Express</strong>
              </div>
              <div className="skill">
                <span>
                  <HiBadgeCheck className="badge__icon" />
                </span>
                <strong>MongoDB</strong>
              </div>
              <div className="skill">
                <span>
                  <HiBadgeCheck className="badge__icon" />
                </span>
                <strong>Mongoose</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
