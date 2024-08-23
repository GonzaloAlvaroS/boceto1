import React from 'react'
import "./LineaInfo.css"
import imagenstock from "../../assets/imagenstock.png"

const LineaInfo = () => {
  return (
    <div className='lineainfo'>
    <div className="lineainfo-imagenes">
        <img src={imagenstock} alt="" />
        <img src={imagenstock} alt="" />
        <img src={imagenstock} alt="" />
        <img src={imagenstock} alt="" />
        <img src={imagenstock} alt="" />
        <img src={imagenstock} alt="" /> 
    </div>
  </div>
  )
}

export default LineaInfo
