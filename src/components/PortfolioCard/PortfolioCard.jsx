import React from "react";

const PortfolioCard = ({ imgSrc, desc, link }) => {
  return (
    <div className="project">
      <div className="project__img">
        <img src={imgSrc} alt="project image" />
      </div>
      <p className="project__desc">{desc}</p>
      <div className="project__btn">
        <button>
          {" "}
          <a href={link} target={"blank"}>
            {" "}
            Live Demo
          </a>
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;
