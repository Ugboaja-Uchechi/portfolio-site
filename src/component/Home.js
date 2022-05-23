import React from "react";
import NavBar from "./Navbar";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
    <div>
      <NavBar />
    </div>
      <main>
        <h1>Hi &#x1f44b;, I'm Stephanie. A Front-End Developer</h1>
      </main>
      <About />
      <Contact />
    </>
  )
}

export default Home;