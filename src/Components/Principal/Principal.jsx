import React from 'react'
import "./Principal.css"
import personaprincipal from "../../assets/personaprincipal.png"
import videostock from "../../assets/videostock.mp4"


const Principal = () => {

  return (
    <div className='principal'>
      <div className="principal-left">
        <h1 className='principal-left-texto1'>Help promote healing and lasting emotional, cognitive and behavioral change</h1>
        <video src={videostock} width={500} controls muted autoPlay></video>
      </div>
      <div className='principal-right'>
        <img src={personaprincipal} alt="" />
      </div>
    </div>
  )
}

export default Principal