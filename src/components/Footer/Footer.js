import "./Footer.scss";
import { NavLink } from "react-router-dom";
import logoFooter from "../../assets/Logo_TMDB-Stacked.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <NavLink to="/">
        <img className="footer__logo-img" src={logoFooter} alt="footer" />
      </NavLink>
    </footer>
  );
};

export default Footer;
