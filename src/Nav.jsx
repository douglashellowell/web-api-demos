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
          <NavLink to="/rotation">Rotation</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
