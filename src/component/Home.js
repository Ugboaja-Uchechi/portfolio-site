import React from "react";
import NavBar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
    <div>
      <NavBar />
    </div>
      <main id="main">
        {/* <h1>Hi &#x1f44b;, I'm Stephanie. <span>A Front-End Developer</span></h1> */}
        <h1>Stephanie <br />Ugboaja</h1>
        <p id="main-p">I am a developer, I build websites and bring ideas to life with code</p>
        <p id="main-p2">Software <br />Developer</p>
      </main>
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default Home;