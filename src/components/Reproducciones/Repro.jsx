import './Repro.css'
import { useEffect, useState } from 'react'

const Repro = () => {
    const [repo, setRepo] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const url1 = `http://localhost:5000/reproductions/${index}`
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const getData = async () => {
            const response = await fetch(url1, options)
            const responseJSON = await response.json()

            setRepo([...repo, ...responseJSON])

        }
        getData()
    }, [index])

    // Elinminar reproduccion con click

    const deleteReproduccion = async (id) => {
        const url = `http://localhost:5000/reproductions/${id}`
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log(id)
        const response = await fetch(url, options)
        const responseJSON = await response.json()
        console.log(responseJSON)
        const newRepo = repo.filter((rep) => rep._id !== id)
        setRepo(newRepo)
    }


    // 

    const reproduccion_Titledata = {
        cancion: "Canción",
        tiempo_reproducido: "Tiempo Reproducción",
        usuario: {
            nombre: "Nombre",
            edad: "Edad",
            pais: "País",
            continente: "Continente",
            suscripcion: "Suscripción",
            genero: "Género",

        }
    }





    return (
        <>
            <div className="reproducciones">
                {
                    repo.map((rep, index) => {
                        return (

                            <>
                                <div className="artista" key={index}>
                                    <div className="artista-info" >
                                        <p className="artista-info-key">{reproduccion_Titledata.cancion}</p>
                                        <p className="artista-info-value">{rep.cancion}</p>
                                    </div>
                                    <div className="artista-info" >
                                        <p className="artista-info-key">{reproduccion_Titledata.tiempo_reproducido}</p>
                                        <p className="artista-info-value">{rep.tiempo_reproducido}</p>
                                    </div>
                                    <div className="artista-info2" >
                                        <p className="artista-info-key">{reproduccion_Titledata.usuario.nombre}</p>
                                        <p className="artista-info-value">{rep.usuario.nombre}</p>

                                    </div>
                                    <div className="artista-info2" >
                                        <p className="artista-info-key">{reproduccion_Titledata.usuario.edad}</p>
                                        <p className="artista-info-value2">{rep.usuario.edad}</p>

                                    </div>
                                    <div className="artista-info2" >
                                        <p className="artista-info-key">{reproduccion_Titledata.usuario.pais}</p>
                                        <p className="artista-info-value2">{rep.usuario.pais}</p>

                                    </div>
                                    <div className="artista-info2" >
                                        <p className="artista-info-key">{reproduccion_Titledata.usuario.continente}</p>
                                        <p className="artista-info-value2">{rep.usuario.region}</p>

                                    </div>
                                    <div className="artista-info2" >
                                        <p className="artista-info-key">{reproduccion_Titledata.usuario.suscripcion}</p>
                                        <p className="artista-info-value2">{rep.usuario.suscripcion === 0 ? "Gratiuto" : "Premium"}</p>
                                    </div>
                                    <div className="artista-info2" >
                                        <p className="artista-info-key">{reproduccion_Titledata.usuario.genero}</p>
                                        <p className="artista-info-value2">{rep.usuario.genero}</p>
                                    </div>

                                </div>
                                <button className="btn" onClick={() => { deleteReproduccion(rep._id) }}>Eliminar</button>
                            </>


                        )

                    }
                    )
                }

            </div>
            <button onClick={() => setIndex(index + 6)}>Cargar mas</button>
        </>
    )
}

export default Repro