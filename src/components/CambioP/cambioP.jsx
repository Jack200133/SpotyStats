import './cambioP.css'
import { React, useEffect, useState, } from 'react'

const CambioP = () => {
    const [password1, setPassword1] = useState('');
    const [password, setPassword] = useState('');

    const confirm = async (e) => {

        if (password === password1) {
            const url = `http://localhost:5000/cambiop/`

            const json = {
                nombre: localStorage.getItem('user'),
                nuevap: password,
            }
            console.log("JSON: ", json)

            const options = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(json)
            }

            const response = await fetch(url, options)
            const responseJSON = await response.json()
            console.log("DATOS: ", responseJSON)

            alert("Cambio exitoso")

        }
        else {
            alert("Las contraseñas no coinciden")
        }


    }

    return (
        <div className="cambio">
            <h2>Cambio de contraseña</h2>
            <h5>Nueva contraseña</h5>
            <input className="password" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Nueva" />
            <h5>Confirmar contraseña</h5>
            <input className="password" type="password" onChange={(e) => setPassword1(e.target.value)} placeholder="Confirmar" />
            <button className="confirmar" type='button' onClick={() => confirm()} >Confirmar</button>

        </div>
    )
}

export default CambioP