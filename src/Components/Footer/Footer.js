import react from "react"
import route from 'react-router-dom'
import logo from "../../Asset/images/Logo/Size=Desktop.png"

function Footer() {
    return (
      <footer className="footer">
        <img src={logo} alt="" className="footer__logo" />
        <p className="footer__text-copyright">
          © 2020 Kasa. All rights reserved
        </p>
      </footer>
    );
}

export default Footer;
        
    
