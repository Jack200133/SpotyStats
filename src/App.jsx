import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Artista from './components/Artista/Artista'
import Regiones from './components/Regiones/Regiones'
import './App.css'

function App() {

  const [home, setHome] = useState("")

  const getContent = () => {
    switch (home) {
      case "artista":
        return <Artista />
      case "regiones":
        return <Regiones />
      case "géneros":
        //return <Genre />
      default:
        return <Artista />
    }
  }

  return (
    <div className="App">
      <NavBar className="nav-bar" home = {home} setHome = {setHome}/>
      {getContent()}
    </div>
  )
}

export default App
