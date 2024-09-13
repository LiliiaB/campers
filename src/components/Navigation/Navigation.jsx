import { Link, NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import logo from "../../assets/logo.png";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navigation = () => {
  return (
    <nav className={css.nav}>
      <Link to="/" className={css.logo}>
        <img src={logo} alt="Logo" />
      </Link>

      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>

      <NavLink to="/catalog" className={buildLinkClass}>
        Catalog
      </NavLink>

      <NavLink to="/favorites" className={buildLinkClass}>
        Favorite
      </NavLink>
    </nav>
  );
};
