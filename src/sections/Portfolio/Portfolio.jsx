import React from "react";

import videohub from "../../assets/videohub.png";
import crypto from "../../assets/crypto.png";
import techstar from "../../assets/techstar.png";
import "./Portfolio.scss";
const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="portfolio">
        <p>My Work</p>
        <h2>Portfolio</h2>
        <div className="portfolio__projects">
          <div className="project">
            <div className="project__img">
              <img src={videohub} alt="project image" />
            </div>
            <p className="project__desc">
              This is a demo video upload and play UI.
            </p>
            <div className="project__btn">
              <button>
                {" "}
                <a
                  href="https://chakra-ui-website-ecru.vercel.app/"
                  target={"blank"}
                >
                  Live Demo
                </a>{" "}
              </button>
            </div>
          </div>
          <div className="project">
            <div className="project__img">
              <img src={techstar} alt="project image" />
            </div>
            <p className="project__desc">
              This is a demo tech service website.
            </p>
            <div className="project__btn">
              <button>
                {" "}
                <a href="https://techsolutions.vercel.app/" target={"blank"}>
                  {" "}
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className="project">
            <div className="project__img">
              <img src={crypto} alt="project image" />
            </div>
            <p className="project__desc">
              This is a crypto stats website. It fetch live data from an api
            </p>
            <div className="project__btn">
              <button>
                {" "}
                <a
                  href="https://crypto-app-one-eta.vercel.app/"
                  target={"blank"}
                >
                  {" "}
                  Live Demo
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
