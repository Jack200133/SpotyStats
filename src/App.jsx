import React from 'react'
import { useEffect, useState } from 'react'
import Home from '../src/components/Home/home'
import Inicio from '../src/components/Inicio Sesion/inicio'
import Registro from '../src/components/Registro/registro'
import './App.css'

function App() {

  const [authenticated, setAuthenticated] = useState(false)
  const [registro, setRegistro] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('authenticated')) {
      setAuthenticated(true)
    }
  }, [])


  return (
    <div className="App">
      {
        authenticated ?
          <Home setAuthenticated={setAuthenticated} /> :
          registro && !authenticated ?
            <Registro setRegistro={setRegistro} /> :
            <Inicio setAuthenticated={setAuthenticated} setRegistro={setRegistro} />
      }


    </div>
  )
}

export default App
