import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdPerson } from 'react-icons/md';

const links = [
  { path: '/', text: 'Books' },
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
    <div className="oval">
      <MdPerson className="profile" />
    </div>
  </nav>
);

export default Navbar;
