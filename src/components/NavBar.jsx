import './NavBar.css';
import logo from "../assets/Logos/Spotify_Logo_RGB_White.png";

const NavBar = () => {
    return (
        <>
            <img src={logo} className='logo' />
            <nav className="nav-bar">
                <a to="/">HOME</a>
                <a to="/about">ABOUT</a>
            </nav>
        </>
    );
}

export default NavBar;