import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return(
        <nav className="navbar">
            <h2>graVITas_TAM</h2>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li className="dropdown">
                    <Link className="dropbtn" to="/events">Events</Link>
                    <div className="dropdown-content">
                        <Link to="/events/survival-showdown">Survival Showdown</Link>
                        <Link to="/events/data-alchemy">Data Alchemy</Link>
                        <Link to="/events/hackathon">Hackathon</Link>
                    </div>
                </li>
                <li><Link to="/registration">Registration</Link></li>
                <li><Link to="/contact">Get in Touch</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;