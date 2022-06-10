import React, { useEffect } from "react";
import NavBar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import gsap from "gsap";

const Home = () => {

  useEffect(() => {
    // const navEl = navRef.current;
    gsap.fromTo('.home-animation', {opacity: 0}, {duration: 1.5, ease: 'power4.inOut', opacity: 1, stagger: .25, delay: 1.3})
  }, [])

  return (
    <>
    <div>
      <NavBar />
    </div>
      <main id="main">
        {/* <h1>Hi &#x1f44b;, I'm Stephanie. <span>A Front-End Developer</span></h1> */}
        <h1 className="home-animation">Stephanie <br />Ugboaja</h1>
        <p id="main-p" className="home-animation">I am a developer, I build websites and bring ideas to life with code</p>
        <p id="main-p2" className="home-animation">Software <br />Developer</p>
      </main>
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default Home;