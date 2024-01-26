import react from 'react-router-dom'
import logo from "../../Asset/images/Logo/headerlogo.png"
import Nav from '../../Components/Nav/Nav.js'


function Header() {

  return (
    <header className='header'>
      <div className="div_container">
  
          <img alt='kasa_logo' src='../../Asset/images/LOGO(1).png' className="home_logo" />
      </div>
      <Nav className="nav-header" />
    </header>
  
  )
}