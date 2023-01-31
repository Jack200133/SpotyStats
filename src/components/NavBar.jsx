import './NavBar.css'
import logo from "../assets/Logos/Spotify_Logo_RGB_White.png"
import exit from "../assets/exit.png"

const NavBar = ({home, setHome, setAuthenticated}) => {

    const handleClick = (e) => {
        setHome(e.target.innerText.toLowerCase())
    }

    return (
        <div className="nav-bar-container">
            
            <img src={logo} className='logo' />
            <h1>STATS</h1>
            <nav className="nav-bar">
                <a className = {`${home === "artista" ? "selected" : ""}`} onClick={ (e) => handleClick(e)}>ARTISTA</a>
                <a className = {`${home === "regiones" ? "selected" : ""}`} onClick={ (e) => handleClick(e)}>REGIONES</a>
                <a className = {`${home === "géneros" ? "selected" : ""}`} onClick={ (e) => handleClick(e)}>GÉNEROS</a>
            </nav>
            <img src= {exit} className='exit' onClick = {() => setAuthenticated(false)}/>
        </div>
    );
}

export default NavBar;