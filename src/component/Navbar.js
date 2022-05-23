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
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.id}>{link.text}</li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar;