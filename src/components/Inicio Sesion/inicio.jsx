import './inicio.css'
import {React, useEffect, useState} from 'react'
import GreenLogo from '../../assets/Icons/Spotify_Icon_RGB_Green.png'

const Inicio = ({ setAuthenticated, setRegistro }) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        const response = await fetch(url,options)
        const responseJSON = await response.json()
        console.log("DATOS: ",responseJSON.password)

        if (responseJSON.password == password){
            setAuthenticated(true)
        }else{
            setAuthenticated(false)
        }
    }

    return (
        <div className='inicio'>
            <div className='inicio-container'>
                <img src={GreenLogo}></img>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo"/>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña"/>
                <button className= "button-inicio" type='button' onClick={() => authenticate(true)}>Iniciar sesión</button>
                <button className="register" type='button' onClick={() => setRegistro(true)} >Registrarse</button>
            </div>
        </div>
    )
}
export default Inicio