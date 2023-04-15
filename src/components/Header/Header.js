import "./Header.scss";
import { NavLink } from "react-router-dom";
import logoHeader from "../../assets/Logo_TMDB.svg";
import { LanguageSelector } from "../../App";
import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import LanguageToggle from "../../utils/LanguageToggle";

const Header = () => {
  const { setLanguage } = useContext(LanguageSelector);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <header className="header">
      <div className="banner">
        <NavLink to="/" className="banner__logo">
          <img
            className="banner__logo-img"
            src={logoHeader}
            alt="header-banner"
          />
        </NavLink>
        <div className="header__lang">
          <LanguageToggle
            className="header__lang-btn"
            onLanguageChange={handleLanguageChange}
          />
        </div>
      </div>
      <div className="banner__nav">
        <NavLink to="/" className="banner__nav-link">
          <FormattedMessage id="header:movies" />
        </NavLink>
        <NavLink to="/quiz" className="banner__nav-link">
          <FormattedMessage id="header:quiz" />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
