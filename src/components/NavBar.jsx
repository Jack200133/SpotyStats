import './NavBar.css';
import logo from "../assets/Logos/Spotify_Logo_RGB_White.png";

const NavBar = () => {
    return (
        <div className="nav-bar-container">
            <img src={logo} className='logo' />
            <h1>STATS</h1>
            <nav className="nav-bar">
                <a to="/">ARTISTA</a>
                <a to="/">REGIONES</a>
                <a to="/about">GÉNEROS</a>
            </nav>
        </div>
    );
}

export default NavBar;