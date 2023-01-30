import { useEffect, useState } from 'react'
import "./regiones.css"

const Regiones = () => {

    const Regiones = ["Norte América", "Centro América","Sur América", "Europa", "Asia", "Oceanía"]
    const [selected, setSelected] = useState("");
    const [active, setActive] = useState(false);

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
                    <h1>{selected}</h1>
                </div>
            }
        </div>
    )
}

export default Regiones;