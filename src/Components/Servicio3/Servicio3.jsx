import React from 'react'
import "./Servicio3.css"
import imagenstock from "../../assets/imagenstock.png"

const Servicio = () => {
  return (
    <div className='servicio3'>
      <div className='servicio3-texto'>
        <h2>Empieza a crear un futuro para ti</h2>
        <h1>Multiples opciones para empezar tu negocio</h1>
      </div>
      <div className="servicio3-imagenes">
        <img src={imagenstock} alt="" className='imagenz1'/>
        <img src={imagenstock} alt="" className='imagenz2'/>
        <img src={imagenstock} alt="" className='imagenz3'/>
      </div>
    </div>
  )
}

export default Servicio
