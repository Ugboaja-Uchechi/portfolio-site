import React, { useEffect } from "react";
import VacayImage from "../images/vacay.png";
import SpaceImage from "../images/space-x.png";
import IpImage from "../images/ip-tracker.png";
import UrlImage from "../images/url-shortening.png";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

  useEffect(() => {
    // const navEl = navRef.current;
    gsap.fromTo('.headings', {opacity: 0, y: '-10%'}, {duration: 2, ease: 'power4.inOut', opacity: 1, y: '0%', delay: .1, scrollTrigger: { trigger: '.headings'
    }})
  }, [])

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
              <p>Vacay home is a rental site built with React, Ruby on Rails, Bootstrap, Jest, and CSS in which users can create reservations for vacation homes and create listings.</p>
            </div>
          </div>
          <div id="grid-column-3">
            <div>
              <img src={SpaceImage} alt="A girl smiling" className="width margin-start"></img>
            </div>
            <div>
              <h3>Space Traveler's Hub</h3>
              <p>Space Traveler's Hub is a desktop web application built with React, Bootstrap, Jest, and, CSS that allow users to book rockets and join selected space missions.</p>
            </div>
          </div>
          <div id="grid-row-3">
            <div>
              <img src={IpImage} alt="A girl smiling" className="width margin-start"></img>
            </div>
            <div>
              <h3>IP Address Tracker</h3>
              <p>IP Address Tracker is a web applcation built with JavaScript, Api, HTML, and, CSS. Users can see their IP Address on the map on the initial page load. Search for any IP addresses or domains and see the key information and location. View the optimal layout for each page depending on their device screen size.</p>
            </div>
          </div>
          <div id="grid-row-4">
            <div>
              <img src={UrlImage} alt="" className="width margin-start" />
            </div>
            <div>
              <h3>URL Shortening API</h3>
              <p>URL Shortening API is a web app built with JavaScript, Api, HTML, and, CSS. Users can shorten any valid URL, see a list of their shortened links, even after refreshing the browser, copy the shortened link to their clipboard in a single click</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects;