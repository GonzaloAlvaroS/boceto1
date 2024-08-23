import React from 'react'
import "./Partebaja.css"
import logo from "../../assets/logo.png"
import instagramlogo from "../../assets/instagramlogo.png"
import facebooklogo from "../../assets/facebooklogo.png"


const Partebaja = () => {
  const handleButtonClick = () => {
    window.open('https://www.instagram.com/knoweats/', '_blank');
  };
  const handleButtonClick2 = () => {
    window.open('https://www.facebook.com/Knoweats/', '_blank');
  };

  return (
    <div className='partebaja'>
      <div className='partebajainfo'>
        <div className='infobaja'>
          <img src={logo} alt="" className='partebajalogo'/>    
        </div>
      <div className='infobaja'>
        <h3>Empresa</h3>
        <p>¿Como funciona?</p>
        <p>¿Quiénes somos?</p>
        <p>¿Como empezar?</p>
      </div>
      <div className='infobaja'>
        <h3>Información</h3>
        <p>Servicio1</p>
        <p>Servicio2</p>
        <p>Servicio3</p>
        <p>Servicio4</p>
        <p>FAQ</p>
      </div>
      <div className='infobaja'>
        <h3>Contacto</h3>
        <p>Contacta con nosotros</p>
        <p>info@thewhitecompany.com</p>
          <div className='logoboton'>
            <img src={instagramlogo} alt="" onClick={handleButtonClick} />
            <img src={facebooklogo} alt="" onClick={handleButtonClick2}/>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Partebaja
