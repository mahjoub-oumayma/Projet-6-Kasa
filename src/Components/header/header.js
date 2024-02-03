 
import Nav from '../Nav/Nav.js'
import Logo from '../../Asset/images/Logo/logokasa.png'


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
export default Header ();