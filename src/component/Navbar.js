import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import gsap from "gsap";
const NavBar = () => {

  // const navRef = useRef(null);

  useEffect(() => {
    // const navEl = navRef.current;
    gsap.fromTo('.animation', {y: '-100%', opacity: 0}, {duration: 1, y: '0%', ease: 'power4.inOut', opacity: 1, stagger: .2})
  }, [])

  const links = [
    {
      id: 1,
      path: '#main',
      text: 'Home'
    },
    {
      id: 2,
      path: '#about',
      text: 'about'
    },
    {
      id: 3,
      path: '#projects',
      text: 'projects'
    },
    {
      id: 4,
      path: '#contact',
      text: 'contact'
    }
  ];
  const [navbarOpen, setNavbarOpen] = useState(false)
  const showNavBar = () => setNavbarOpen(!navbarOpen);
  return (
    <>
      <header>
        <nav className="nav">
          <div>
            <i class="fa-solid fa-bars" id="menu" onClick={showNavBar}></i>
          </div>
          <div>
            <h3 className="header-name animation">Stephanie Ugboaja</h3>
          </div>
          <ul className={navbarOpen ? "header-ul active" : "header-ul"}>
            <div>
              <i class="fa-solid fa-xmark" id="close" onClick={showNavBar}></i>
            </div>
            {links.map((link) => (
              <li className="animation" key={link.id}>
                <Link to={link.path} exact smooth>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar;