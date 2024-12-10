import React from "react";
import "./Edu.css";
import bfc from "../assets/images/bombayflyingclub.webp";
import schl from "../assets/images/mumbaiuniversity.webp";
import mcheng from "../assets/images/mecheng.webp";

const Edu = () => {
  return (
    <div>
      <div className="edu-body">
        <div className="blurred-container">
          <h1 className="eduh1">EDUCATION</h1>
          <div className="edu-content">
            <div className="educnt">
              <div className="btech">
                <div className="educnt">
                  <h2>Rajasthan Vidhyapeeth University</h2>
                  <h3>B.tech-Mechanical Engineering</h3>
                  <p>Specialization Subject: Management of Technology.</p>
                  <p>year of completion : 2017</p>
                </div>
                <div className="eduimg">
                  <img className="eduimg" src={mcheng} alt="" />
                </div>
              </div>
              <div className="arc">
                <div className="eduimg1">
                  <img className="eduimg1" src={bfc} alt="" />
                </div>
                <div className="educnt">
                  <h2>Bombay Flying Club</h2>
                  <h3>Aircraft Maintenance Engineering Certified Course</h3>
                  <p>Specialization Subject: Mechanics-Engine-Airframe</p>
                  <p>Year of Completion : 2012</p>
                </div>
              </div>
              <div className="schl">
                <div className="educnt">
                  <h2>Mumbai University</h2>
                  <h3>Higher School</h3>
                  <p>Stream Science</p>
                  <p>year of completion : 2011</p>
                </div>
                <div className="eduimg">
                  <img className="eduimg" src={schl} alt="" />
                </div>
              </div>
            </div>
            <a className="homebutton" href="/">
              Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edu;
