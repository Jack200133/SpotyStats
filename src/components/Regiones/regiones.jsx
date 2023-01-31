import { useEffect, useState } from 'react'
import "./regiones.css"
import arrow from "../../assets/arrow.png"

const Regiones = (start) => {

    const Regiones = ["Norte América", "Centro América","Sur América", "Europa", "Asia", "Oceanía"]
    const [selected, setSelected] = useState(false);
    const [active, setActive] = useState(false);

    const handleReturn = () => {
        setActive(false);
    }

    const handleClick = (index) => {
        setSelected(Regiones[index]);
        setActive(true);
    }

    return (
        <div className="regiones">
            {
                !active && 
                Regiones.map((region, index) => {
                    return <div className="region" key={index} onClick={ () => handleClick(index)}>{region.toUpperCase()}</div>
                })
            }
            {
                active && 
                <div className="region-selected">
                    <div className="titulo-region">
                        <img src={arrow} onClick= {() => {handleReturn()} }></img>
                        <h1>{selected}</h1>
                    </div>
                </div>
            }
        </div>
    )
}

export default Regiones;