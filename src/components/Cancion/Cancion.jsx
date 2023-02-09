import './Cancion.css'
import { useEffect, useState } from 'react'

const Cancion = () => {

    const [repo, setRepo] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const url1 = `http://localhost:5000/canciones/${index}`
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


    const cancion_Title = {
        nombre: "Nombre",
        duracion: "Duracion",
        autor: "Autor",
        generos: "Generos",
        popularidad: "Popularidad",
        rating: "Ratings",
        ratingAVG: "Rating AVG",
    }



    return (
        <>
            <div className="canciones">
                {
                    repo.map((rep, index) => {
                        return (

                            <>
                                <div className="artista" key={index}>
                                    <div className="artista-info" >
                                        <p className="artista-info-key">{cancion_Title.nombre}</p>
                                        <p className="artista-info-value">{rep.nombre}</p>
                                    </div>
                                    <div className="artista-info" >
                                        <p className="artista-info-key">{cancion_Title.duracion}</p>
                                        <p className="artista-info-value">{rep.duracion}</p>
                                    </div>
                                    <div className="artista-info" >
                                        <p className="artista-info-key">{cancion_Title.autor}</p>
                                        <p type="text" className="artista-info-value"> {rep.autor}</p>

                                    </div>
                                    <div className="artista-info" >
                                        <p className="artista-info-key">{cancion_Title.generos}</p>
                                        <p type="text" className="artista-info-value">{rep.generos} </p>

                                    </div>
                                    <div className="artista-info" >
                                        <p className="artista-info-key">{cancion_Title.popularidad}</p>
                                        <p className="artista-info-value">{rep.popularidad}</p>

                                    </div>
                                    <div className="artista-info" >
                                        <p className="artista-info-key">{cancion_Title.rating}</p>
                                        <p className="artista-info-value">{`[ ${rep.rating.map((e) => { return `${e} ` })} ]`}</p>
                                    </div>
                                    <div className="artista-info" >
                                        <p className="artista-info-key">{cancion_Title.ratingAVG}</p>
                                        <p className="artista-info-value">{rep.avg_rating}</p>
                                    </div>

                                </div>

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

export default Cancion