import './Artista.css'

const Artista = () => {

    const info = {
        nombre: "Juan",
        apellido: "Avila",
        fechaN: "14/01/2002",
        nombreArtistico: "Tancriko",
        seguidores: 10000,
        canciones: 10,
        genero: "Rock",
        albumes: 5
    }

    const nombres = {
        nombre: "Nombre",
        apellido: "Apellido",
        fechaN: "Fecha de nacimiento",
        nombreArtistico: "Nombre artístico",
        seguidores: "Seguidores",
        canciones: "Canciones",
        genero: "Género",
        albumes: "Álbumes"
    }


    return (
        <div className="artista">
            {
                Object.keys(info).map((key, index) => {
                    return (
                        <div className="artista-info" key={index}>
                            <p className="artista-info-key">{nombres[key].toUpperCase()}</p>
                            <p className="artista-info-value">{info[key]}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Artista