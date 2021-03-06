import React, { useEffect } from "react";
import ProfileImage from "../images/prof-image.jpg"
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const About = () => {

  useEffect(() => {
    // const navEl = navRef.current;
    gsap.fromTo('.about-animation', {opacity: 0, y: '-10%'}, {duration: 0.8, ease: 'power4.inOut', opacity: 1, y: '0%', stagger: .25, scrollTrigger: { trigger: '.about-animation'
    }})
  }, [])

  return (
    <>
      <section id="about">
        <h2 className="headings about-animation m-block">About <span>me</span></h2>
        <div className="about">
          <div>
            <p className="width about-animation about-text">Hi there!, I'm Stephanie a software developer. For as long as I can remember I have always wanted to work in the tech industry. Since then, I've been honing my skills to make sure I get better at what I love doing. Years later, I decided to enroll in a boot-camp called Microvere and spent about a year learning about how to create the web through remote pair-programming with people from across the world. Through these experiences, I've had the opportunity to create memorable products, and, meet people with various experiences which has helped raise my standards and help me grow as a developer and as a person.
            </p>
          </div>
          <div id="about-img-cover">
            <img src={ProfileImage} alt="A girl smiling" className="width margin-start about-animation"></img>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;