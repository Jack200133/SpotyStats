import React from 'react'
import { useEffect, useState } from 'react'
import Home from '../src/components/Home/home'
import Inicio from '../src/components/Inicio Sesion/inicio'
import './App.css'

function App() {

  const [authenticated, setAuthenticated] = useState(false)
  

  
  return (
    <div className="App">
        {
        authenticated ?
        <Home setAuthenticated = {setAuthenticated}/> :
        <Inicio setAuthenticated = {setAuthenticated} />
      }
  
      
    </div>
  )
}

export default App
