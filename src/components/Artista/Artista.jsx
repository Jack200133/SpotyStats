import './Artista.css'

const Artista = () => {

    const info = {
        nombre: localStorage.getItem('user'),
        apellido: localStorage.getItem('apellido'),
        nombreArtistico: localStorage.getItem('nombre_artistico'),
        seguidores: localStorage.getItem('seguidores'),
        canciones: localStorage.getItem('cantidad_canciones'),
        genero: localStorage.getItem('generos'),
    }

    const nombres = {
        nombre: "Nombre",
        apellido: "Apellido",
        nombreArtistico: "Nombre artístico",
        seguidores: "Seguidores",
        canciones: "Canciones",
        genero: "Género",
    }



    return (
        <div className="artista">
            {
                Object.keys(info).map((key, index) => {
                    return (
                        (info[key] != null && info[key] != 0 && info[key] != "" && info[key] != "undefined" && info[key] != "null") ?
                            <div className="artista-info" key={index}>
                                <p className="artista-info-key">{nombres[key].toUpperCase()}</p>
                                <p className="artista-info-value">{info[key]}</p>
                            </div>
                            :
                            <div />
                    )
                })
            }
        </div>
    )
}

export default Artista