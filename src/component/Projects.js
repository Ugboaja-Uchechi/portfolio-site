import React from "react";
import VacayImage from "../images/vacay.png";
import SpaceImage from "../images/space-x.png";
import IpImage from "../images/ip-tracker.png";
import UrlImage from "../images/url-shortening.png";

const Projects = () => {
  return (
    <>
      <section>
      <div id="h2-cover">
        <h2 className="headings">Selected</h2>
        <h2 className="headings" id="span">Projects</h2>
      </div>
        <div className="grid-container">
          <div id="grid-column-2">
            <div>
              <img src={VacayImage} alt="A girl smiling" className="width margin-start"></img>
            </div>
            <div>
              <h3>Vacay Home</h3>
              <p></p>
            </div>
          </div>
          <div id="grid-column-3">
            <div>
              <img src={SpaceImage} alt="A girl smiling" className="width margin-start"></img>
            </div>
            <div>
              <h3>Space-X Hub</h3>
              <p></p>
            </div>
          </div>
          <div id="grid-row-3">
            <div>
              <img src={IpImage} alt="A girl smiling" className="width margin-start"></img>
            </div>
            <div>
              <h3>IP Address Tracker</h3>
              <p></p>
            </div>
          </div>
          <div id="grid-row-4">
            <div>
              <img src={UrlImage} alt="" className="width margin-start" />
            </div>
            <div>
              <h3>URL Shortening API</h3>
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects;