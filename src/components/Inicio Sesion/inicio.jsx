import './inicio.css'
import {React, useEffect, useState} from 'react'
import GreenLogo from '../../assets/Icons/Spotify_Icon_RGB_Green.png'

const Inicio = ({ setAuthenticated }) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const authenticate = (e) => {
        console.log('entro')
        setAuthenticated(true)
    }

    return (
        <div className='inicio'>
            <div className='inicio-container'>
                <img src={GreenLogo}></img>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo"/>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña"/>
                <button className= "button-inicio" type='button' onClick={() => authenticate(true)}>Iniciar sesión</button>
                <button className="register" type='button' >Registrarse</button>
            </div>
        </div>
    )
}
export default Inicio