import { NavLink } from "react-router-dom";
import logo from "../../../assets/img/Logo.svg";
import styles from "./Header.module.css";
import layoutStyles from "../Layout/Layout.module.css";
function Header() {
  const linkCssClass = ({ isActive }) =>
    isActive
      ? `${styles.navLink} ${styles.navLinkActive}`
      : `${styles.navLink} `;

  return (
    <header className={`${styles.header} ${layoutStyles.wrapper}`}>
      <NavLink to="/" className={styles.logo}>
        <img src={logo} alt={"Little Lemon Restaurant"} />
      </NavLink>
      <nav className={styles.menu}>
        <ul className={"hstack"}>
          <li>
            <NavLink to="/" className={linkCssClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkCssClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={linkCssClass}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/reservations" className={linkCssClass}>
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/order-online" className={linkCssClass}>
              Order Online
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={linkCssClass}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
