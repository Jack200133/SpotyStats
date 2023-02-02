import React, { useState } from 'react'
import NavBar from '../NavBar'
import Artista from '../Artista/Artista'
import Regiones from '../Regiones/Regiones'
import '../../App.css'



const Home = ({setAuthenticated}) => {

    const [home, setHome] = useState("")


    const getContent = () => {
        switch (home) {
        case "artista":
            return <Artista />
        case "regiones":
            return <Regiones start={false}/>
        case "géneros":
            //return <Genre />
        default:
            return <Artista />
        }
    }

    return (
        <div className="App">
            <NavBar className="nav-bar" home = {home} setHome = {setHome} setAuthenticated ={setAuthenticated}/>
            {getContent()}
        </div>
    )
}

export default Home;