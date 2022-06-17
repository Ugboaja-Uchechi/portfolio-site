import React, { useEffect } from "react";
// import VacayImage from "../images/vacay.png";
// import SpaceImage from "../images/space-x.png";
// import IpImage from "../images/ip-tracker.png";
// import UrlImage from "../images/url-shortening.png";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

  useEffect(() => {
    // const navEl = navRef.current;
    gsap.fromTo('.first-head', {opacity: 0, y: '-10%'}, {duration: 2, ease: 'power4.inOut', opacity: 1, y: '0%', delay: .1, scrollTrigger: { trigger: '.first-head'
    }})
  }, [])

  useEffect(() => {
    // const navEl = navRef.current;
    gsap.fromTo('#span', {opacity: 0, y: '-10%'}, {duration: 2, ease: 'power4.inOut', opacity: 1, y: '0%', delay: .1, scrollTrigger: { trigger: '#span'
    }})
  }, [])

  useEffect(() => {
    // const navEl = navRef.current;
    gsap.fromTo('.right-animation', {opacity: 0, x: '5%'}, {duration: 1.5, ease: 'power4.inOut', opacity: 1, x: '0%', delay: .3, scrollTrigger: { trigger: '.right-animation'
    }})
  }, [])

  useEffect(() => {
    // const navEl = navRef.current;
    gsap.fromTo('.right-2-animation', {opacity: 0, x: '5%'}, {duration: 1.5, ease: 'power4.inOut', opacity: 1, x: '0%', delay: .1, scrollTrigger: { trigger: '.right-2-animation'
    }})
  }, [])

  useEffect(() => {
    // const navEl = navRef.current;
    gsap.fromTo('.left-animation', {opacity: 0, x: '-5%'}, {duration: 1.5, ease: 'power4.inOut', opacity: 1, x: '0%', delay: .3, scrollTrigger: { trigger: '.left-animation'
    }})
  }, [])

  useEffect(() => {
    // const navEl = navRef.current;
    gsap.fromTo('.left-2-animation', {opacity: 0, x: '-5%'}, {duration: 1.5, ease: 'power4.inOut', opacity: 1, x: '0%', delay: .1, scrollTrigger: { trigger: '.left-2-animation'
    }})
  }, [])

  return (
    <>
      <section className="project-section">
        <div id="h2-cover">
          <h2 className="headings first-head">Selected</h2>
          <h2 className="headings" id="span">Projects</h2>
        </div>
        <div id="grid-container">
          <div>
            <div id="div-1" className="project-div left-animation">
              <div className="content">
                <h3 className="project-title">Vacay Home</h3>
                <p>Vacay home is a rental site built with React, Ruby on Rails, Bootstrap, Jest, and CSS in which users can create reservations for vacation homes and create listings.</p>
              </div>
              <div className="project-link-cover">
                <a href="https://github.com/Ugboaja-Uchechi/Vacayhome-front-end" target="_blank" rel="noreferrer" className="project-links">View GitHub</a>
                <a href="https://vacay-home.netlify.app/" target="_blank" rel="noreferrer" className="project-links">Live Project</a>
              </div>
              <div id="img">
              </div>
            </div>
          </div>
          <div>
            <div id="div-2" className="project-div right-animation">
              <div className="content">
                <h3 className="project-title">Space Traveler's Hub</h3>
                <p>Space Traveler's Hub is a desktop web application built with React, Bootstrap, Jest, and, CSS that allow users to book rockets and join selected space missions.</p>
              </div>
              <div className="project-link-cover">
                <a href="https://github.com/Ugboaja-Uchechi/space-x-hub" target="_blank" rel="noreferrer" className="project-links">View GitHub</a>
                <a href="https://space-x-hub.netlify.app/" target="_blank" rel="noreferrer" className="project-links">Live Project</a>
              </div>
              <div id="img-2">
              </div>
            </div>
          </div>
          <div>
            <div id="div-3" className="project-div left-2-animation">
              <div className="content">
                <h3 className="project-title">IP Address Tracker</h3>
                <p>IP Address Tracker is a web applcation built with JavaScript, Api, HTML, and, CSS. Users can see their IP Address on the map on the initial page load. Search for any IP addresses or domains and see the key information and location. View the optimal layout for each page depending on their device screen size.</p>
              </div>
              <div className="project-link-cover">
                <a href="https://github.com/Ugboaja-Uchechi/ip-address-tracker" target="_blank" rel="noreferrer" className="project-links">View GitHub</a>
                <a href="https://ip-address-tracker1.netlify.app/" target="_blank" rel="noreferrer" className="project-links">Live Project</a>
              </div>
              <div id="img-3">
              </div>
            </div>
          </div>
          <div>
            <div id="div-4" className="project-div right-2-animation">
              <div className="content">
                <h3 className="project-title">URL Shortening API</h3>
                <p>URL Shortening API is a web app built with JavaScript, Api, HTML, and, CSS. Users can shorten any valid URL, see a list of their shortened links, even after refreshing the browser, copy the shortened link to their clipboard in a single click</p>
              </div>
              <div className="project-link-cover">
                <a href="https://github.com/Ugboaja-Uchechi/url-shortener" target="_blank" rel="noreferrer" className="project-links">View GitHub</a>
                <a href="https://ip-address-tracker1.netlify.app/" target="_blank" rel="noreferrer" className="project-links">Live Project</a>
              </div>
              <div id="img-4">
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects;