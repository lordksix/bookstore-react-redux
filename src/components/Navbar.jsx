import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: 'categories', text: 'Categories' },
];

const Navbar = () => (
  <nav className="navbar">
    <ul>
      {links.map((link) => (
        <React.Fragment key={link.text}>
          <li>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {link.text}
            </NavLink>
          </li>
        </React.Fragment>
      ))}
    </ul>
  </nav>
);

export default Navbar;