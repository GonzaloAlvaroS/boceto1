import React from 'react'
import "./Servicio1.css"
import imagenstock from "../../assets/imagenstock.png"


const Servicio1 = () => {

  return (
    <div className='servicio1'>
      <div className="servicio1-left">
        <img src={imagenstock} alt="" className='imagen'/>
      </div>
      <div className="servicio1-right">
        <h2>El negocio del futuro</h2>
        <p>SR Psychological Services is a group of caring and compassionate psychologists and psychotherapists located in midtown Manhattan. We have experience working in various clinical settings, with different patient populations and treating a wide range of psychological conditions</p>
        <h3>¿Listo para empezar a crear un futuro?</h3>
      </div>
    </div>
  )
}

export default Servicio1
