import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png" 
import menu_icon from "../../assets/menu-icon.png"
import { Link } from 'react-scroll'

const Navbar = () => {

    const[sticky, setSticky] = useState(false)

    useEffect(()=>{
      window.addEventListener("scroll", ()=>{
        window.scrollY > 15 ? setSticky(true) : setSticky(false)
      })
    },[]);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
      mobileMenu? setMobileMenu(false) : setMobileMenu(true);
}

  return (

     <nav className={`container ${sticky? "dark-nav" : ""}`}>   
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu?"":"hide-mobile-menu"}>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>MENU</Link></li>
        <li><Link to="servicio1" smooth={true} offset={-170} duration={500}>SERVICIOS</Link></li>
        <li><Link to="servicio2" smooth={true} offset={-120} duration={500}>SERVICIOS2</Link></li>
        <li><Link to="servicio3" smooth={true} offset={-70} duration={500}>SERVICIOS3</Link></li>
        <li><Link to="servicio4" smooth={true} offset={-20} duration={500}>SERVICIOS4</Link></li>
        <li><Link to="equipo" className="faq" smooth={true} offset={-70} duration={500}>FAQ</Link></li> 
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar