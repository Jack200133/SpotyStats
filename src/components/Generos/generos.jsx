import { useEffect, useState } from 'react'
import "./generos.css"
import arrow from "../../assets/arrow.png"

const Generos = (start) => {

    const [regiones, setRegiones] = useState([])
    const [continentesData, setContinentesData] = useState([])
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(false);
    const [active, setActive] = useState(false);
        

    const getData = async () => {
        const url = 'http://localhost:5000/topGenero/'

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(url, options)
        const responseJSON = await response.json()
        console.log(responseJSON)

        setData(responseJSON)
        setRegiones(responseJSON)
        
        

    }

    useEffect(() => {
        async function fetchData() {
            await getData()
        }
        fetchData()
    }, [])

    const handleReturn = () => {
        setActive(false);
    }

    const handleClick = (name) => {
        setSelected(name);
        setActive(true);
    }

    return (
        <div className="regiones">
            {
                !active &&
                regiones.map((region, index) => {
                    return <div className="region" key={index} onClick={() => handleClick(region["_id"])}>{region["_id"].toUpperCase()}</div>
                })

            }
            {
                active &&
                <div className="region-selected">
                    <div className="titulo-region">
                        <img src={arrow} onClick={() => { handleReturn() }}></img>
                        <h1>{selected}</h1>
                    </div>
                    <div className="paises-region">
                        {
                        data.map((item, index) => {
                            if (item["_id"]== selected){
                                    return (
                                        <div key={index}>
                                            {
                                                <div className="paises-container">
                                                    <div className="genero-cancion"></div>
                                                    <div className="genero-titulo" key={index}>
                                                        <div> {"Cancion"} </div>
                                                        <div> {"Tiempo reproducido"} </div>
                                                    </div>
                                                    {
                                                        item["canciones"].map((cancion, index) => {
                                                            return (
                                                                <div className="cancion-individual" key={index}>
                                                                    <div> {cancion["cancion"]} </div>
                                                                    <div> {cancion["tiempo"]} </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            }
                                        </div>
                                            
                                    )
                            }

                        })
                        }
                    </div>

                </div>
            }
        </div>
    )
}

export default Generos;