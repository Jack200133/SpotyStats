import React from 'react'
import { useEffect, useState } from 'react'
import Home from '../src/components/Home/home'
import Inicio from '../src/components/Inicio Sesion/inicio'
import Registro from '../src/components/Registro/registro'
import './App.css'

function App() {

  const [authenticated, setAuthenticated] = useState(false)
  const [registro, setRegistro] = useState(false)
  

  
  return (
    <div className="App">
      {
        authenticated ?
        <Home setAuthenticated = {setAuthenticated}/> :
        registro ?
        <Registro setRegistro = {setRegistro}/> :
        <Inicio setAuthenticated = {setAuthenticated} setRegistro = {setRegistro}/>
      }
  
      
    </div>
  )
}

export default App
