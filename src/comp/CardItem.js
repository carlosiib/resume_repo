import React from "react";
import mern from "../comp/assets/mern.png";
import rcg from "../comp/assets/rcg.png";
import af from "../comp/assets/af.png";

import "./CardItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNodeJs,
  faReact,
  faHtml5,
  faCss3Alt,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

const CardItem = () => {
  return (
    <React.Fragment>
      <div className="citem-wrapper">
        <div className="citem-content">
          <div className="citem-img">
            <img src={mern} alt="Mern project"></img>
          </div>
          <h3 className="citem-title">MERN App</h3>
          <p className="citem-description">
            Final project applying MERN stack technologies
            that allow users to create, view and edit places
            of interest.
          </p>
          <div className="technologies">
            <i>
              <FontAwesomeIcon icon={faReact} color="red" />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faNodeJs}
                color="red"
              />
            </i>
          </div>
        </div>
      </div>

      <div className="citem-wrapper">
        <div className="citem-content">
          <div className="citem-img">
            <img src={rcg} alt="RCG Bikes"></img>
          </div>
          <h3 className="citem-title">RCG Bikes</h3>
          <p className="citem-description">
            Development of a system for a better usage of
            the internal inventory and point of sale,
            applying SCRUM methodology.
          </p>

          <div className="technologies">
            <i>
              <FontAwesomeIcon icon={faReact} color="red" />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faGitAlt}
                color="red"
              />
            </i>
          </div>
        </div>
      </div>

      <div className="citem-wrapper">
        <div className="citem-content">
          <div className="citem-img">
            <img src={af} alt="Allien Fitness"></img>
          </div>
          <h3 className="citem-title">Allien Fitness</h3>
          <p className="citem-description">
            Proposal of a web page to a local gym for better
            online presence, promote, sell services and get
            more local reach.
          </p>

          <div className="technologies">
            <i>
              <FontAwesomeIcon icon={faHtml5} color="red" />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faCss3Alt}
                color="red"
              />
            </i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default CardItem;
