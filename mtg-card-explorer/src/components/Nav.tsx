import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="nav">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
