import React from "react";
import mern from "../comp/assets/mern.png";
import rcg from "../comp/assets/rcg.png";
import fengshui from "../comp/assets/fengshui.png";

import "./CardItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNodeJs,
  faReact,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

const CardItem = () => {
  return (
    <React.Fragment>


      <div className="citem-wrapper">
        <div className="citem-content">
          <div className="citem-img">
            <img src={fengshui} alt="arlene ruiz"></img>
          </div>
          <h3 className="citem-title">Arlene Ruiz Fengshui</h3>
          <p className="citem-description">
            Development of a service to process online payments through Stripe.
            Creation of functionalities for administrator users.
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
            <img src={mern} alt="RCG Bikes"></img>
          </div>
          <h3 className="citem-title">MERN App</h3>
          <p className="citem-description">
            Personal project applying MERN stack technologies
            that allow users to create, view and edit places
            of interest.
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





    </React.Fragment>
  );
};
export default CardItem;
