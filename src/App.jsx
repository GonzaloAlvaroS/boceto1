import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Principal from "./Components/Principal/Principal"
import LineaInfo from "./Components/LineaInfo/LineaInfo"
import Servicio1 from "./Components/Servicio1/Servicio1"
import Servicio2 from "./Components/Servicio2/Servicio2"
import Servicio3 from "./Components/Servicio3/Servicio3"
import Servicio4 from "./Components/Servicio4/Servicio4"
import Partebaja from "./Components/Partebaja/Partebaja"

const App = () => {
  return (
    <div>
     <Navbar/> 
     <Principal/>
     <LineaInfo/>
     <Servicio1/>
     <Servicio2/>
     <Servicio3/>
     <Servicio4/>
     <Partebaja/>
    </div>
  )
}

export default App




