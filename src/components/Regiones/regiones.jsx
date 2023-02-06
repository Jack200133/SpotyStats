import { useEffect, useState } from 'react'
import "./regiones.css"
import paises from './regiones.json'
import continentes from './continentes.json'
import arrow from "../../assets/arrow.png"

const Regiones = (start) => {

    const readContinentes = () => JSON.parse(JSON.stringify(continentes))
    const readPaises = () => JSON.parse(JSON.stringify(paises))
    const Regiones = ["Norte América", "Centro América", "Sur América", "Europa", "Asia", "Oceanía"]
    const [continentesData, setContinentesData] = useState([])
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(false);
    const [active, setActive] = useState(false);

    const getData = async () => {
        const url = 'http://localhost:5000/topRegion/'

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(url, options)
        const responseJSON = await response.json()
        setData(responseJSON)

        readContinentes()
    }

    const separateData = async () => {
        readPaises()
        const dataCentroAmerica = []
        const dataNorteAmerica = []
        const dataSurAmerica = []
        const dataEuropa = []
        const dataAsia = []
        const dataOceania = []
        const dataAntarctica = []
        const dataAfrica = []


        data.forEach((item) => {
            paises.forEach(element => {
                if (element.country === item._id && element.continent === "Central America")
                    dataCentroAmerica.push(item)

                if (element.country === item._id && element.continent === "North America")
                    dataNorteAmerica.push(item)

                if (element.country === item._id && element.continent === "South America")
                    dataSurAmerica.push(item)

                if (element.country === item._id && element.continent === "Europe")
                    dataEuropa.push(item)

                if (element.country === item._id && element.continent === "Asia")
                    dataAsia.push(item)

                if (element.country === item._id && element.continent === "Oceania")
                    dataOceania.push(item)

                if (element.country === item._id && element.continent === "Antarctica")
                    dataAntarctica.push(item)

                if (element.country === item._id && element.continent === "Africa")
                    dataAfrica.push(item)
            })
        })

        const dataSeparada = {
            "Central America": dataCentroAmerica,
            "North America": dataNorteAmerica,
            "South America": dataSurAmerica,
            "Europe": dataEuropa,
            "Asia": dataAsia,
            "Oceania": dataOceania,
            "Antarctica": dataAntarctica,
            "Africa": dataAfrica
        }

        setContinentesData(dataSeparada)
    }

    useEffect(() => {
        async function fetchData() {
            await getData()
            await separateData()
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
                Object.keys(continentesData).map((region, index) => {
                    return <div className="region" key={index} onClick={() => handleClick(region)}>{region.toUpperCase()}</div>
                })

            }
            {
                active &&
                <div className="region-selected">
                    <div className="titulo-region">
                        <img src={arrow} onClick={() => { handleReturn() }}></img>
                        <h1>{selected}</h1>
                    </div>
                    <div className="paises-region">{
                        continentesData[selected] ?
                            continentesData[selected].map((item, index) => {
                                console.log(item._id)
                                return <div key={index}>{item._id}</div>
                            })
                            :
                            <div></div>

                    }</div>

                </div>
            }
        </div>
    )
}

export default Regiones;