import './Footer.scss';
import LogoFooter from '../../assets/logo-footer.png';
const Footer = () => {
  return (
    <div className='footer' onClick={() => window.scroll(0, 0)}>
      <img className='footer__img' src={LogoFooter}></img>
    </div>
  );
};

export default Footer;
