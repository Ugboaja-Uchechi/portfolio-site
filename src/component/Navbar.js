import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
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
            <h3>Stephanie Ugboaja</h3>
          </div>
          <ul className="header-ul">
            {links.map((link) => (
              <li key={link.id}>
                <NavLink to={link.path} exact>{link.text}</NavLink></li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar;