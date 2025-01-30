import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="nav">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            data-testid="home-link"
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
      </ul>
    </nav>
  );
};

export default Nav;
