import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import logo from "../../assets/logo.png";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navigation = () => {
  return (
    <div className={css.header}>
      <div className={css.container}>
        <span className={css.logo}>
          <img src={logo} alt="Company Logo" />
        </span>

        <nav className={css.nav}>
          <ul className={css.list}>
            <li className={css.item}>
              <NavLink to="/" className={buildLinkClass}>
                Home
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink to="/catalog" className={buildLinkClass}>
                Catalog
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink to="/favorites" className={buildLinkClass}>
                Favorite
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
