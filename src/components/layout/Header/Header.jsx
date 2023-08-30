import { NavLink } from "react-router-dom";
import logo from "../../../assets/img/Logo.svg";
import basket from "../../../assets/img/Basket.svg";
import menuIcon from "../../../assets/img/🦆 icon _hamburger menu.svg";
import headerStyles from "./Header.module.css";
import layoutStyles from "../Layout/Layout.module.css";
import { useState } from "react";
function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const linkCssClass = ({ isActive }) =>
    isActive
      ? `${headerStyles.navLink} ${headerStyles.navLinkActive}`
      : `${headerStyles.navLink} `;

  return (
    <header className={`${headerStyles.header} ${layoutStyles.wrapper}`}>
      <button
        className={`${headerStyles.respMenuIcon} ${layoutStyles.respVisible}`}
        onClick={() => setMenuIsOpen((prevState) => !prevState)}
      >
        <img src={menuIcon} alt={"Menu"} />
      </button>
      <NavLink to="/" className={headerStyles.logo}>
        <img src={logo} alt={"Little Lemon Restaurant"} />
      </NavLink>
      <NavLink
        to="/order-online"
        className={`${layoutStyles.respVisible} ${headerStyles.orderOnlineIcon} `}
      >
        <img src={basket} alt={"Order online"} />
      </NavLink>
      <nav
        className={`${headerStyles.menu} ${layoutStyles.respHidden} ${
          menuIsOpen ? headerStyles.visibleMenu : headerStyles.hiddenMenu
        }`}
      >
        <ul>
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
