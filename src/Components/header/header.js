import Nav from '../Nav/Nav.js'
import Logo from '../../Asset/images/Logo/logokasa.png'
import style from '../../Styles/Components/header.scss'



function Header() {
    return (
      <header className="header">
        <figure className="header__fig">
          <img className="Logo" src={Logo} alt="logo de l'agence kasa" />
        </figure>
        <Nav className="nav-header" />
      </header>
    );
}

export default Header