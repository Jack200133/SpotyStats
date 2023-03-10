import './inicio.css'
import { React, useEffect, useState, } from 'react'
import GreenLogo from '../../assets/Icons/Spotify_Icon_RGB_Green.png'

const Inicio = ({ setAuthenticated, setRegistro }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const client_id = "3e5c97ca35184e2e907593dce6277b70"
    // const client_secret = "508c63883dfc48f2a4988c39154a3d9e "
    // const redirect_uri = "http://localhost:5000/callback"

    // const refreshSongs = async () => {
    //     //const url = `http://localhost:5000/refresh/`
    //     //const response = await fetch(url)
    //     //const responseJSON = await response.json()


    //     const state = (Math.random().toString(36)).slice(2, 16+2)

    //     localStorage.setItem("stateKey", state)
    //     var scope = 'user-read-private user-read-email'
    //     var url = 'https://accounts.spotify.com/authorize'
    //     url += '?response_type=token'
    //     url += '&client_id=' + encodeURIComponent(client_id)
    //     url += '&scope=' + encodeURIComponent(scope)
    //     url += '&redirect_uri=' + encodeURIComponent(redirect_uri)
    //     url += '&state=' + encodeURIComponent(state)

    //     console.log(url)

    // }

    const authenticate = async (e) => {
        const url = `http://localhost:5000/login/`

        const json = {
            email: email,
            password: password
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

        try {
            localStorage.setItem("email", responseJSON.email)
            localStorage.setItem("password", responseJSON.password)
            localStorage.setItem("user", responseJSON.nombre)
            localStorage.setItem("apellido", responseJSON.apellido)
            localStorage.setItem("seguidores", responseJSON.seguidores)
            localStorage.setItem("nombre_artistico", responseJSON.nombre_artisitco)
            localStorage.setItem("cantidad_canciones", responseJSON.cantidad_canciones)
            localStorage.setItem("generos", responseJSON.generos)

        } catch (e) {
            console.error(e);
        }


        if (responseJSON.password == password) {
            //refreshSongs()
            localStorage.setItem("authenticated", true)
            setAuthenticated(true)
        } else {

            localStorage.setItem("authenticated", false)
            setAuthenticated(false)
        }
    }

    return (
        <div className='inicio'>
            <div className='inicio-container'>
                <img src={GreenLogo}></img>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo" />
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contrase??a" />
                <button className="button-inicio" type='button' onClick={() => authenticate(true)}>Iniciar sesi??n</button>
                <button className="register" type='button' onClick={() => setRegistro(true)} >Registrarse</button>
            </div>
        </div>
    )
}
export default Inicio