import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
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
      path: '/',
      text: 'Home'
    },
    {
      id: 2,
      path: '/about',
      text: 'about'
    },
    {
      id: 3,
      path: '/projects',
      text: 'projects'
    },
    {
      id: 4,
      path: '/contact',
      text: 'contact'
    }
  ];
  return (
    <>
      <header>
        <nav className="nav">
          <div>
            <h3 className="header-name animation">Stephanie Ugboaja</h3>
          </div>
          <ul className="header-ul">
            {links.map((link) => (
              <li className="animation" key={link.id}>
                <NavLink to={link.path} exact>{link.text}</NavLink></li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar;