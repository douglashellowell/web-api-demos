import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/battery">Battery</NavLink>
          <NavLink to="/audio">Audio</NavLink>
          <NavLink to="/vibration">Vibration</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
