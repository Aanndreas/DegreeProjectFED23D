import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="nav">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            data-testid="landing-link"
          >
            Landing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            data-testid="favorites-link"
          >
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
