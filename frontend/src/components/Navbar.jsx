import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return(
        <nav className="navbar">
            <h2>graVITas_TAM</h2>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/registration">Registration</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;