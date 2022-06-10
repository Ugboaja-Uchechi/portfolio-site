import React, { useEffect } from "react";
import ProfileImage from "../images/prof-image.jpg"
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const About = () => {

  useEffect(() => {
    // const navEl = navRef.current;
    gsap.fromTo('.about-animation', {opacity: 0, y: '-10%'}, {duration: 1, ease: 'power4.inOut', opacity: 1, y: '0%', stagger: .2, delay: .1, scrollTrigger: { trigger: '.about-animation'
    }})
  }, [])

  return (
    <>
      <section className="height">
        <h2 className="headings about-animation">About <span>me</span></h2>
        <div className="about about-animation">
          <div className="margin-end">
            <p className="width about-animation">Hi, I'm Stephanie.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quasi quos. Dolores optio voluptatem perspiciatis saepe soluta amet iure laudantium eum! Aut voluptate odio ducimus consequuntur incidunt culpa iusto placeat. Doloribus ut, alias quasi ipsa repudiandae recusandae commodi nihil? Possimus dolorem aliquam quos tempora architecto aut non voluptates commodi repellendus voluptas atque ratione placeat consequuntur soluta minima, molestias libero. Minus!Ad, dignissimos incidunt voluptatibus, atque sapiente quas aperiam illo provident ut rerum laboriosam, exercitationem cum veniam. Error eius magni, omnis veritatis eligendi nam inventore expedita saepe vitae labore repellat dolorum!
            </p>
          </div>
          <div>
            <img src={ProfileImage} alt="A girl smiling" className="width margin-start about-animation"></img>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;