import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faNodeJs,
  faJsSquare,
  faReact,
  faCss3Alt,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

import profile from "./assets/profile.png";

import "./About.css";

const About = (props) => {
  return (
    <div className="outside">
      <div className="card-wrapper">
        <div className="img-parrafo">
          <img src={profile} alt="picture" />
          <div className="card-info">
            <p className="card-title">Who am I</p>
            <p className="main-content">
              <p>
                Hi, I'm Carlos Ibarra, a passionate developer that enjoys working with <span>frontend</span> technologies.
              </p>

              <p>
                My goal is to develop highly effective
                applications that assure{" "}
                <span>quality</span> and confidence to my
                teammates and clients.
              </p>

              <p>
                I'm always in a self{" "}
                <span>improvement</span> process either
                personal or professional, looking for{" "}
                <span>efficient</span> ways to communicate,
                learn and work as a team to obtain
                satisfactory results that are reflected in
                my daily life.
              </p>


            </p>
          </div>
        </div>
        <div className="icons-content">
          <p>Skills</p>
          <i>
            <FontAwesomeIcon icon={faHtml5} color="red" />
          </i>
          <i>
            <FontAwesomeIcon icon={faCss3Alt} color="red" />
          </i>
          <i>
            <FontAwesomeIcon
              icon={faJsSquare}
              color="red"
            />
          </i>

          <i>
            <FontAwesomeIcon icon={faGitAlt} color="red" />
          </i>
          <i>
            <FontAwesomeIcon icon={faReact} color="red" />
          </i>
          {/* <i>
            <FontAwesomeIcon icon={faNodeJs} color="red" />
          </i> */}
        </div>
      </div>
    </div>
  );
};
export default About;
