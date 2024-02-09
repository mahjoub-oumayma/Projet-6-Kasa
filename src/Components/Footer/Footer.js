import react from "react"
import route from 'react-router-dom'
import logo from "../../Asset/images/Logo/Size=Desktop (2).png"
import Logo from '../../Asset/images/Logo/D_Footer.png'
import style from '../../Styles/Components/Footer.scss'

function Footer() {
    return (
      <footer className="footer">
        <img src={logo} alt="" className="footer__logo" />
        <img src={Logo} alt="footer" className="footer_mobil"/>
        <p className="footer__text-copyright">
          © 2020 Kasa. All rights reserved
        </p>
      </footer>
    );
}

export default Footer;
        
    
