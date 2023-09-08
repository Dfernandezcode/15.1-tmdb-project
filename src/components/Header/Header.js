import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-header.png';
import './Header.scss';
import { useContext } from 'react';
import { LanguageSelector } from '../../App';
import { FormattedMessage } from 'react-intl';

const Header = () => {
  const { setLanguage } = useContext(LanguageSelector);
  return (
    <div className='header'>
      <div className='header__links'>
        <div className='header__links-pages'>
          <NavLink className='header__links-link' to='/'>
            <img className='header__logo-image' src={logo} />
          </NavLink>
          <div className='header__links--app'>
            <NavLink className='header__links-link' to='/'>
              <FormattedMessage id='films' />
            </NavLink>
            <NavLink className='header__links-link' to='/quiz'>
              <FormattedMessage id='game' />
            </NavLink>
          </div>
        </div>
        <div className='header__lang'>
          <button onClick={() => setLanguage('es-ES')} className='header__lang-btn'>
            ES
          </button>
          <button onClick={() => setLanguage('en-EN')} className='header__lang-btn'>
            EN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
