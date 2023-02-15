import React from "react";

import videohub from "../../assets/videohub.png";
import crypto from "../../assets/crypto.png";
import techstar from "../../assets/techstar.png";
import deyaar from "../../assets/deyaar.png";
import chat from "../../assets/chat.png";
import countries from "../../assets/countries.png";
import travel from "../../assets/travel.png";
import stackoverflow from "../../assets/stackoverflow.png";
import twitter from "../../assets/twitter.png";
import "./Portfolio.scss";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
const Portfolio = () => {
  const projectArray = [
    {
      id: 1,
      desc: "This is a demo video upload and play UI",
      imgSrc: videohub,
      link: "https://chakra-ui-website-ecru.vercel.app/",
    },
    {
      id: 2,
      desc: "This is a demo tech service website.",
      imgSrc: techstar,
      link: "https://techsolutions.vercel.app/",
    },
    {
      id: 3,
      desc: " This is a crypto stats website. It fetch live data from an api",
      imgSrc: crypto,
      link: "https://crypto-app-one-eta.vercel.app/",
    },
    {
      id: 4,
      desc: "This is a clone website of deyaar facilities.",
      imgSrc: deyaar,
      link: "https://deyaar-facilities.vercel.app/",
    },
    {
      id: 5,
      desc: " This is a messaging app. It has all the basic features of a chat app. Like authentication, chating.",
      imgSrc: chat,
      link: "https://messaging-app-tawny.vercel.app/",
    },
    {
      id: 6,
      desc: " This is a api based country detail website. With theme and search feature.",
      imgSrc: countries,
      link: "https://countries-info-eight.vercel.app/",
    },
    {
      id: 7,
      desc: " This is the landing page clone build using firebase.",
      imgSrc: twitter,
      link: "https://twitter-clone-f671c.web.app/",
    },
    {
      id: 8,
      desc: "This is a travel website.",
      imgSrc: travel,
      link: "https://tourism-website-psi.vercel.app/",
    },
    {
      id: 9,
      desc: " This is a stackoverflow clone website.",
      imgSrc: stackoverflow,
      link: "https://stack-over-flow-frontend.onrender.com/",
    },
  ];
  return (
    <div id="portfolio">
      <div className="portfolio">
        <p>My Work</p>
        <h2>Portfolio</h2>
        <div className="portfolio__projects">
          {projectArray.map((project) => {
            return (
              <PortfolioCard
                key={project.id}
                desc={project.desc}
                imgSrc={project.imgSrc}
                link={project.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
