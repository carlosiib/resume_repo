import React from "react";
import "./Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <p>Hi, I´m</p>
        <h1>Carlos Ibarra</h1>
        <h2>Software Developer</h2>

        <div className="icons">
          <a
            href="https://github.com/carlosiib?tab=repositories"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              color="red"
            />
          </a>
          <a
            href="https://linkedin.com/in/carlos-ivan-ibarra"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="red"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
