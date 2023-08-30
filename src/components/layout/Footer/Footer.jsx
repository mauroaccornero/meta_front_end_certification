import layoutStyles from "../Layout/Layout.module.css";
import footerStyle from "./Footer.module.css";
import footeriMG from "../../../assets/img/restaurant chef B.jpg";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer id="footer" className={footerStyle.footer}>
      <section className={layoutStyles.wrapper}>
        <figure>
          <img src={footeriMG} alt="Little lemon restaurant" />
        </figure>
        <dl>
          <dt>Links</dt>
          <dd>
            <NavLink to="/" role="button">
              Home
            </NavLink>
          </dd>
          <dd>
            <NavLink to="/about" role="button">
              About
            </NavLink>
          </dd>
          <dd>
            <NavLink to="/menu" role="button">
              Menu
            </NavLink>
          </dd>
          <dd>
            <NavLink to="/reservations" role="button">
              Reservations
            </NavLink>
          </dd>
          <dd>
            <NavLink to="/order-online" role="button">
              Order Online
            </NavLink>
          </dd>
          <dd>
            <NavLink to="/login" role="button">
              Login
            </NavLink>
          </dd>
        </dl>
        <dl>
          <dt>Contacts</dt>
          <dd>Down street union 24</dd>
          <dd>12345 Chicago</dd>
          <dd>01 23 45 67 890</dd>
          <dd>324 56 78 90 0</dd>
          <dd>
            <a href="mailto:info@littlelemon.com" role="button">
              info@littlelemon.com
            </a>
          </dd>
        </dl>
        <dl>
          <dt>Social</dt>
          <dd>
            <a href="/" role="button">
              Facebook
            </a>
          </dd>
          <dd>
            <a href="/" role="button">
              Instagram
            </a>
          </dd>
          <dd>
            <a href="/" role="button">
              The Fork
            </a>
          </dd>
          <dd>
            <a href="/" role="button">
              Twitter
            </a>
          </dd>
        </dl>
      </section>
    </footer>
  );
}

export default Footer;
