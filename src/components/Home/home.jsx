import React, { useState } from 'react'
import NavBar from '../NavBar'
import Artista from '../Artista/Artista'
import Regiones from '../Regiones/regiones'
import CambioP from '../CambioP/cambioP'
import Repro from '../Reproducciones/Repro'
import '../../App.css'
import Generos from '../Generos/generos'
import Cancion from '../Cancion/Cancion'



const Home = ({ setAuthenticated }) => {

    const [home, setHome] = useState("")


    const getContent = () => {
        switch (home) {
            case "artista":
                return <Artista />
            case "regiones":
                return <Regiones start={false} />
            case "cambiop":
                return <CambioP />
            case "reproducciones":
                return <Repro />
            case "géneros":
                return <Generos />
            case "canciones":
                return <Cancion />

            default:
                return <Artista />
        }
    }

    return (
        <div className="App">
            <NavBar className="nav-bar" home={home} setHome={setHome} setAuthenticated={setAuthenticated} />
            {getContent()}
        </div>
    )
}

export default Home;