import {React, useEffect, useState} from 'react'
import GreenLogo from '../../assets/Icons/Spotify_Icon_RGB_Green.png'
import './registro.css'

const Registro = ({setRegistro}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [seguidores, setSeguidores] = useState('');
    const [nombreArtistico, setNombreArtistico] = useState('');
    const [cantidadCanciones, setCantidadCanciones] = useState('');
    const [genero, setGenero] = useState('');

    const obligatorios = [email, password, nombre, genero]

    const register = async (e) => {

        const url = `http://localhost:5000/register/`

        const json = {
            email: email,
            password: password,
            nombre: nombre,
            apellido: apellido,
            seguidores: seguidores == "" ? 0 : seguidores,
            nombreArtistico: nombreArtistico,
            cantidadCanciones: cantidadCanciones == "" ? 0 : cantidadCanciones,
            generos: genero.split(",")
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        }

        const response = await fetch(url, options)
        const responseJSON = await response.json()
        console.log("DATOS: ",responseJSON[0])

        setRegistro(false)
    }

    return (
        <div className='registro'>
            <div className='registro-container'>
                <img src={GreenLogo}></img>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="* Correo"/>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="* Contraseña"/>
                <input type='genero' value={genero} onChange={(e) => setGenero(e.target.value)} placeholder="* Genero Musical"/>
                <input type='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="* Nombre"/>
                <input type='apellido' value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Apellido"/>
                <input type='seguidores' value={seguidores} onChange={(e) => setSeguidores(e.target.value)} placeholder="Seguidores"/>
                <input type='nombreArtistico' value={nombreArtistico} onChange={(e) => setNombreArtistico(e.target.value)} placeholder="Nombre Artistico"/>
                <input type='cantidadCanciones' value={cantidadCanciones} onChange={(e) => setCantidadCanciones(e.target.value)} placeholder="Cantidad de canciones"/>
                <button className="register-button" type='button' onClick = {() => register()}>Registrarse</button>
                <button className="return" type='button' onClick = {() => setRegistro(false)}>Regresar</button>
            </div>
        </div>
    )
}

export default Registro